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
 * Renders inline bold markers within a text string.
 */
function renderInline(text: string): React.ReactNode {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      part
    )
  );
}
