import Image from "next/image";

import { ContactForm } from "./components/ContactForm";

const PORTFOLIO_HREF = "/portfolio";

const brands = [
  {
    id: "serhat-kuzu",
    number: "01",
    title: "Serhat Kuzu",
    subtitle: "Costume Designer",
    description:
      "Kişisel portföy, set çalışmaları, kostüm tasarımları, konsept çizimler ve üretim süreçleri.",
    image: "/column-serhat-kuzu.png",
    imageSide: "right" as const,
    showLogo: false,
  },
  {
    id: "artibirtakim",
    number: "02",
    title: "artibirtakım",
    subtitle: "Creative Studio",
    description:
      "Dizi, film, tiyatro ve sahne sanatlarına yönelik yaratıcı tasarım, üretim ve uygulama çözümleri.",
    image: "/column-artibirtakim.png",
    imageSide: "right" as const,
    showLogo: false,
  },
  {
    id: "smk-tasarim",
    number: "03",
    title: "SMK Tasarım Atölyesi",
    subtitle: "",
    description:
      "Kurumsal üniforma tasarımı ve üretimi. Teknik koleksiyon geliştirme ve profesyonel üretim çözümleri.",
    image: "/column-smk.png",
    imageSide: "right" as const,
    showLogo: false,
  },
];

const expertise = [
  { label: "Kostüm Tasarımı", icon: "costume" },
  { label: "Aksesuar & Takı Tasarımı", icon: "accessory" },
  { label: "Prop Üretimi", icon: "prop" },
  { label: "Teknik Üretim", icon: "technical" },
  { label: "Kurumsal Üniforma", icon: "uniform" },
  { label: "Koleksiyon Geliştirme", icon: "collection" },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ExpertiseIcon({ type }: { type: string }) {
  const common = "stroke-current";
  switch (type) {
    case "costume":
      return (
        <svg className={`h-10 w-10 ${common}`} viewBox="0 0 40 40" fill="none">
          <path d="M20 6v28M12 14h16M14 22h12" strokeWidth="1.2" />
          <ellipse cx="20" cy="10" rx="6" ry="3" strokeWidth="1.2" />
        </svg>
      );
    case "accessory":
      return (
        <svg className={`h-10 w-10 ${common}`} viewBox="0 0 40 40" fill="none">
          <rect x="10" y="14" width="20" height="14" rx="2" strokeWidth="1.2" />
          <path d="M14 14V10a6 6 0 0112 0v4" strokeWidth="1.2" />
        </svg>
      );
    case "prop":
      return (
        <svg className={`h-10 w-10 ${common}`} viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="18" r="8" strokeWidth="1.2" />
          <path d="M14 28c2-4 10-4 12 0" strokeWidth="1.2" />
        </svg>
      );
    case "technical":
      return (
        <svg className={`h-10 w-10 ${common}`} viewBox="0 0 40 40" fill="none">
          <path d="M12 20h16M20 12v16" strokeWidth="1.2" />
          <circle cx="20" cy="20" r="10" strokeWidth="1.2" />
        </svg>
      );
    case "uniform":
      return (
        <svg className={`h-10 w-10 ${common}`} viewBox="0 0 40 40" fill="none">
          <path d="M12 12l8-4 8 4v20H12V12z" strokeWidth="1.2" />
          <path d="M16 20h8" strokeWidth="1.2" />
        </svg>
      );
    default:
      return (
        <svg className={`h-10 w-10 ${common}`} viewBox="0 0 40 40" fill="none">
          <path d="M14 10h12v22H14V10z" strokeWidth="1.2" />
          <path d="M18 6h4v4h-4V6z" strokeWidth="1.2" />
        </svg>
      );
  }
}

function BrandLogo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={48}
      height={48}
      className={`rounded-full object-cover ${className}`}
    />
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070605]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center px-5 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-4 text-white"
          aria-label="Ana sayfa"
        >
          <BrandLogo className="h-11 w-11 sm:h-12 sm:w-12" />
          <span className="flex flex-col">
            <span className="font-serif text-base uppercase tracking-[0.22em] sm:text-lg">
              Serhat Kuzu
            </span>
            <span className="text-[9px] font-medium uppercase tracking-[0.38em] text-white/50 sm:text-[10px]">
              Costume Designer
            </span>
          </span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-[#070605] px-5 pb-20 pt-28 text-white sm:px-8 sm:pt-32 lg:min-h-screen lg:px-10"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-sketch.png"
          alt=""
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover object-right opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#070605] via-[#070605]/92 to-[#070605]/55" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.45em] text-[#d7a762] sm:mb-6">
            Costume Designer
          </p>
          <h1 className="max-w-4xl font-serif text-[clamp(2.8rem,10vw,7.5rem)] font-light uppercase leading-[0.88] tracking-tighter">
            Serhat Kuzu
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
            Dizi, film, sinema, tiyatro ve kurumsal projeler için karakter, dönem
            ve hikâye odaklı kostüm tasarımı. Yaratıcı tasarım ile teknik üretimi
            bir araya getiren bütüncül bir süreç.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/portfolio.pdf"
              className="inline-flex h-14 items-center justify-center gap-3 border border-[#d7a762] bg-[#d7a762] px-8 text-xs font-bold uppercase tracking-[0.22em] text-[#090705] transition hover:bg-transparent hover:text-[#d7a762] md:hidden"
            >
              Portfolyoyu İncele
              <ArrowIcon />
            </a>
            <a
              href={PORTFOLIO_HREF}
              className="hidden h-14 items-center justify-center gap-3 border border-[#d7a762] bg-[#d7a762] px-8 text-xs font-bold uppercase tracking-[0.22em] text-[#090705] transition hover:bg-transparent hover:text-[#d7a762] md:inline-flex"
            >
              Portfolyoyu İncele
              <ArrowIcon />
            </a>
            <a
              href="#contact"
              className="inline-flex h-14 items-center justify-center gap-3 border border-white/25 px-8 text-xs font-bold uppercase tracking-[0.22em] text-white/80 transition hover:border-[#d7a762] hover:text-[#d7a762]"
            >
              İletişim
            </a>
          </div>
        </div>

        <div className="hidden lg:flex lg:justify-end">
          <div className="relative h-[560px] w-[470px] overflow-hidden border border-white/10 bg-white/5 p-3 shadow-2xl">
            <Image
              src="/hero-right-style.png"
              alt="Kostüm konsept çizimi"
              fill
              priority
              sizes="35vw"
              className="object-cover object-center p-3"
            />
            <div className="pointer-events-none absolute inset-0 border border-white/10" />
          </div>
        </div>
      </div>

      <a
        href="#brands"
        className="absolute bottom-8 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 text-white/50 transition hover:border-[#d7a762] hover:text-[#d7a762]"
        aria-label="Aşağı kaydır"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" aria-hidden>
          <path
            d="M12 5v14m0 0-6-6m6 6 6-6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </a>
    </section>
  );
}

function BrandsSection() {
  return (
    <section id="brands" className="scroll-mt-20 bg-[#e8e4dc]">
      <div className="mx-auto max-w-7xl border-y border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-3 md:border-x md:border-black/10">
          {brands.map((brand, index) => (
            <article
              key={brand.id}
              id={brand.id}
              className={`relative bg-[#e8e4dc] ${
                index < brands.length - 1
                  ? "border-b border-black/10 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <div className="grid min-h-[360px] grid-cols-1 sm:grid-cols-[44%_56%] md:min-h-[390px]">
                <div
                  className={`relative min-h-[240px] bg-[#e8e4dc] ${
                    brand.imageSide === "right" ? "sm:order-2" : ""
                  }`}
                >
                  <Image
                    src={brand.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 16vw"
                    className={`object-contain object-bottom opacity-[0.88] ${
                      brand.imageSide === "right" ? "object-right" : "object-left"
                    }`}
                  />
                </div>
                <div
                  className={`flex flex-col justify-between p-7 sm:p-8 ${
                    brand.imageSide === "right" ? "sm:order-1" : ""
                  }`}
                >
                  <div>
                    <div className="mb-8 flex items-center gap-3">
                      <span className="text-[11px] font-bold tracking-[0.34em] text-[#8a5c2a]">
                        {brand.number}
                      </span>
                      <span className="h-px w-10 bg-black/20" />
                    </div>

                    {brand.showLogo && (
                      <div className="mb-6">
                        <BrandLogo className="h-12 w-12" />
                      </div>
                    )}

                    <h2 className="font-serif text-[2.05rem] uppercase leading-[0.96] tracking-tight text-[#14110e]">
                      {brand.title}
                    </h2>

                    {brand.subtitle ? (
                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#14110e]/45">
                        {brand.subtitle}
                      </p>
                    ) : null}

                    <p className="mt-6 text-[13px] leading-[1.75] text-[#14110e]/62">
                      {brand.description}
                    </p>
                  </div>

                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section className="bg-[#e8e4dc] px-5 py-16 text-[#100d0a] sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-5 h-px w-16 bg-[#9b6932]/40" />
          <h2 className="font-serif text-3xl uppercase tracking-tight sm:text-4xl">
            Uzmanlık Alanlarımız
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {expertise.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 text-[#9b6932]">
                <ExpertiseIcon type={item.icon} />
              </div>
              <p className="text-[11px] font-medium uppercase leading-5 tracking-[0.12em] text-[#100d0a]/75">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-white/10 bg-[#070605] px-5 py-14 text-white sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <BrandLogo className="h-14 w-14" />
                <div>
                  <p className="font-serif text-2xl uppercase tracking-[0.12em]">
                    Serhat Kuzu
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.38em] text-white/45">
                    Costume Designer
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
                Yaratıcı tasarım ve teknik üretimi bir araya getiren kostüm
                tasarımı ve atölye hizmetleri.
              </p>
            </div>

            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#d7a762]">
                İletişim
              </p>
              <address className="space-y-3 not-italic text-sm leading-7 text-white/62">
                <span className="block">İstanbul, Türkiye</span>
                <span className="block pt-2 text-white/45">
                  Kostüm atölye: Nişantaşı Satre
                </span>
                <span className="block text-white/45">
                  SMK Tasarım Atölyesi: Giyimkent
                </span>
                <span className="block text-white/45">
                  Artıbirtakım: Adatepe Maltepe
                </span>
              </address>

              <div className="mt-7">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#d7a762]">
                  Takip Et
                </p>
                <a
                  className="inline-flex items-center gap-2 text-sm text-white/62 transition hover:text-[#d7a762]"
                  href="https://instagram.com/srhtkuzu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3.5"
                      y="3.5"
                      width="17"
                      height="17"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="border border-white/10 bg-white/3 p-6 sm:p-8">
            <h2 className="mb-6 font-serif text-2xl uppercase tracking-tight">
              Teklif / Mesaj
            </h2>
            <ContactForm />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Serhat Kuzu · Costume Designer
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/50 transition hover:text-[#d7a762]"
          >
            Yukarı çık
            <ArrowIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandsSection />
        <ExpertiseSection />
      </main>
      <Footer />
    </>
  );
}
