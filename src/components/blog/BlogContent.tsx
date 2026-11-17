import Image from "next/image";
import Link from "next/link";

/**
 * Renders markdown-style blog content as styled HTML.
 */
export function BlogContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let inTable = false;
  let tableRows: string[][] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="my-4 space-y-2 pl-6">
          {listItems.map((item, i) => (
            <li key={i} className="list-disc text-muted leading-relaxed">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      const [header, ...body] = tableRows;
      elements.push(
        <div key={`table-${elements.length}`} className="my-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                {header.map((cell, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold">
                    {cell.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.filter((row) => !row.every((c) => c.match(/^[-|]+$/))).map((row, ri) => (
                <tr key={ri} className="border-b border-border last:border-0">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-muted">
                      {cell.trim()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (trimmed.startsWith("|")) {
      flushList();
      inTable = true;
      tableRows.push(
        trimmed
          .split("|")
          .filter((_, i, arr) => i > 0 && i < arr.length - 1)
      );
      return;
    } else if (inTable) {
      flushTable();
    }

    if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={index} className="mt-10 mb-4 text-2xl font-bold text-foreground">
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={index} className="mt-8 mb-3 text-xl font-semibold text-foreground">
          {trimmed.slice(4)}
        </h3>
      );
    } else if (trimmed.startsWith("- ")) {
      listItems.push(trimmed.slice(2));
    } else if (/^!\[.*\]\(.*\)$/.test(trimmed)) {
      const imageMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
      if (imageMatch) {
        flushList();
        const [, alt, src] = imageMatch;
        const isRemote = src.startsWith("http");
        elements.push(
          <figure
            key={index}
            className="my-8 overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={src}
                alt={alt}
                fill
                unoptimized={isRemote}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
            {alt ? (
              <figcaption className="border-t border-border px-4 py-3 text-center text-xs text-muted">
                {alt}
              </figcaption>
            ) : null}
          </figure>
        );
      }
    } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      flushList();
      elements.push(
        <p key={index} className="my-3 font-semibold text-foreground">
          {trimmed.slice(2, -2)}
        </p>
      );
    } else if (trimmed.length > 0) {
      flushList();
      elements.push(
        <p key={index} className="my-4 leading-relaxed text-muted">
          {renderInline(trimmed)}
        </p>
      );
    }
  });

  flushList();
  flushTable();

  return <div className="prose-custom">{elements}</div>;
}

/**
 * Renders inline bold and markdown links within a text string.
 */
function renderInline(text: string): React.ReactNode {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(
        ...renderBoldSegments(text.slice(lastIndex, match.index), key)
      );
      key += 50;
    }
    const href = match[2];
    const isExternal = href.startsWith("http");
    nodes.push(
      isExternal ? (
        <a
          key={`link-${key++}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:text-accent-dark hover:decoration-accent"
        >
          {match[1]}
        </a>
      ) : (
        <Link
          key={`link-${key++}`}
          href={href}
          className="font-medium text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:text-accent-dark"
        >
          {match[1]}
        </Link>
      )
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(...renderBoldSegments(text.slice(lastIndex), key));
  }

  if (nodes.length === 0) return text;
  if (nodes.length === 1) return nodes[0];
  return nodes;
}

function renderBoldSegments(text: string, keyOffset: number): React.ReactNode[] {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={`b-${keyOffset + i}`} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      <span key={`t-${keyOffset + i}`}>{part}</span>
    )
  );
}
