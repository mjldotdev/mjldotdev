"use client";
import { Terminal } from "@/components/custom/ui/terminal";

export function TerminalDemo() {
  return (
    <Terminal
      commands={[
        "npx shadcn@latest init",
        "npm install motion lenis",
        "npx shadcn@latest add button card",
        "Term Deez Nuts",
      ]}
      delayBetweenCommands={1000}
      outputs={{
        0: [
          "✔ Preflight checks passed.",
          "✔ Created components.json",
          "✔ Initialized project.",
        ],
        1: ["added 2 packages in 2s"],
        2: ["✔ Done. Installed button, card."],
      }}
      typingSpeed={45}
    />
  );
}
