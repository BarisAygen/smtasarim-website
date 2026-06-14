"use client";

import { useEffect, useState } from "react";

function isMobileDevice() {
  if (typeof window === "undefined") return false;

  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const narrowViewport = window.matchMedia("(max-width: 768px)").matches;

  return coarsePointer && narrowViewport;
}

export default function PortfolioViewer() {
  const [mobile, setMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setMobile(isMobileDevice());
  }, []);

  if (mobile === null) {
    return (
      <div className="flex min-h-[calc(100dvh-5rem)] flex-1 items-center justify-center bg-[#1a1a1a] text-sm text-white/45">
        Portfolyo yükleniyor…
      </div>
    );
  }

  if (mobile) {
    return (
      <div className="flex min-h-[calc(100dvh-5rem)] flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="max-w-sm text-sm leading-7 text-white/55">
          Mobil cihazlarda portfolyo tarayıcının kendi görüntüleyicisinde açılır;
          böylece sayfalar arasında rahatça kaydırabilirsiniz.
        </p>
        <a
          href="/portfolio.pdf"
          className="inline-flex h-14 items-center justify-center border border-[#d7a762] bg-[#d7a762] px-8 text-xs font-bold uppercase tracking-[0.22em] text-[#090705] transition hover:bg-transparent hover:text-[#d7a762]"
        >
          Portfolyoyu Aç
        </a>
        <a
          href="/portfolio.pdf"
          download
          className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45 transition hover:text-[#d7a762]"
        >
          PDF indir
        </a>
      </div>
    );
  }

  return (
    <iframe
      src="/portfolio.pdf"
      title="Serhat Kuzu Portfolyo"
      className="min-h-[calc(100dvh-5rem)] w-full flex-1 border-0 bg-[#1a1a1a]"
    />
  );
}
