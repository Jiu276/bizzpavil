"use client";

import { useState, type FormEvent } from "react";

/**
 * Contact form with client-side submission feedback.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center animate-fade-in">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-2xl">
          ✓
        </div>
        <h3 className="mt-4 text-xl font-semibold text-foreground">
          Message Sent!
        </h3>
        <p className="mt-2 text-muted">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm transition-all duration-300 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm transition-all duration-300 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm transition-all duration-300 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder="Partnership inquiry"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="mt-2 w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm transition-all duration-300 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder="Tell us how we can help..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-dark hover:shadow-lg disabled:opacity-60 sm:w-auto"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
