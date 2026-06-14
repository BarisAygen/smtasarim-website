import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PortfolioViewer from "./PortfolioViewer";

export const metadata: Metadata = {
  title: "Portfolyo | Serhat Kuzu",
  description: "Serhat Kuzu kostüm tasarım portfolyosu.",
};

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#070605] text-white">
      <header className="border-b border-white/10 px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Ana sayfa">
            <Image
              src="/logo.png"
              alt="Serhat Kuzu"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="/portfolio.pdf"
              download
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55 transition hover:text-[#d7a762]"
            >
              İndir
            </a>
            <Link
              href="/"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55 transition hover:text-[#d7a762]"
            >
              Ana sayfa
            </Link>
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <PortfolioViewer />
      </main>
    </div>
  );
}
