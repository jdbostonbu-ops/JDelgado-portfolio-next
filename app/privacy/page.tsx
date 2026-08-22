import type { Metadata } from "next";
import { readFile } from "node:fs/promises";
import path from "node:path";
import Footer from "@/components/Footer";
import PrivacyContactForm from "@/components/PrivacyContactForm";

export const metadata: Metadata = {
  title: "Narley Privacy Policy | Jacqueline Delgado",
  description: "The privacy policy for the Narley Community Resources and Provider apps.",
};

type PolicyBlock =
  | { type: "heading"; level: 1 | 2; content: string }
  | { type: "paragraph"; content: string }
  | { type: "list"; items: string[] };

function parsePolicy(markdown: string): PolicyBlock[] {
  const blocks: PolicyBlock[] = [];
  const lines = markdown.trim().split("\n");
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: "paragraph", content: paragraph.join(" ") });
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list.length) {
      blocks.push({ type: "list", items: list });
      list = [];
    }
  };

  for (const line of lines) {
    if (!line.trim()) {
      flushParagraph();
      flushList();
    } else if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: 1, content: line.slice(2) });
    } else if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: 2, content: line.slice(3) });
    } else if (line.startsWith("- ")) {
      flushParagraph();
      list.push(line.slice(2));
    } else {
      flushList();
      paragraph.push(line);
    }
  }

  flushParagraph();
  flushList();
  return blocks;
}

function InlineText({ content }: { content: string }) {
  const parts = content.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index}>{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  );
}

export default async function PrivacyPage() {
  const markdown = await readFile(
    path.join(process.cwd(), "Narley-privacy-policy.md"),
    "utf8"
  );
  const policy = parsePolicy(markdown);

  return (
    <>
      <header className="nav privacy-nav">
        <div className="nav-links">
          <a href="/" className="nav-cta">Back to portfolio</a>
        </div>
      </header>
      <main className="section section--cloud privacy-page">
        <article className="privacy-policy">
          {policy.map((block, index) => {
            if (block.type === "heading") {
              return block.level === 1 ? (
                <div className="privacy-title" key={index}>
                  <p className="eyebrow mono">Narley Community Resources Mobile apps Provider/Reader</p>
                  <h1>{block.content}</h1>
                </div>
              ) : (
                <h2 key={index}>{block.content}</h2>
              );
            }

            if (block.type === "list") {
              return (
                <ul key={index}>
                  {block.items.map((item) => (
                    <li key={item}><InlineText content={item} /></li>
                  ))}
                </ul>
              );
            }

            return <p key={index}><InlineText content={block.content} /></p>;
          })}
        </article>
        <PrivacyContactForm />
      </main>
      <Footer />
    </>
  );
}
