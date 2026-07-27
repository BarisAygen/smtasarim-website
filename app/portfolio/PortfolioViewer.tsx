"use client";

import { useEffect, useState } from "react";

/** Phones/tablets: native PDF viewer. Desktop: iframe. */
function shouldUseNativePdf() {
  if (typeof window === "undefined") return false;

  const touchOrCoarse =
    window.matchMedia("(pointer: coarse)").matches ||
    navigator.maxTouchPoints > 0;
  const notWideDesktop = window.matchMedia("(max-width: 1024px)").matches;

  return touchOrCoarse || notWideDesktop;
}

export default function PortfolioViewer() {
  const [mode, setMode] = useState<"loading" | "native" | "iframe">("loading");

  useEffect(() => {
    if (shouldUseNativePdf()) {
      // iPad/tablet iframe PDF often shows only the first page —
      // open the file in the browser's native viewer instead.
      window.location.replace("/portfolio.pdf");
      setMode("native");
      return;
    }

    setMode("iframe");
  }, []);

  if (mode === "iframe") {
    return (
      <iframe
        src="/portfolio.pdf#toolbar=1&navpanes=1&view=FitH"
        title="Serhat Kuzu Portfolyo"
        className="min-h-[calc(100dvh-5rem)] w-full flex-1 border-0 bg-[#1a1a1a]"
      />
    );
  }

  return (
    <div className="flex min-h-[calc(100dvh-5rem)] flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="max-w-sm text-sm leading-7 text-white/55">
        Portfolyo açılıyor…
      </p>
      <a
        href="/portfolio.pdf"
        className="inline-flex h-14 items-center justify-center border border-[#d7a762] bg-[#d7a762] px-8 text-xs font-bold uppercase tracking-[0.22em] text-[#090705] transition hover:bg-transparent hover:text-[#d7a762]"
      >
        Portfolyoyu Aç
      </a>
    </div>
  );
}
