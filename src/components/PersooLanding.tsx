"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getYouTubeVideoId } from "@/lib/youtube";
import { ProductSection } from "@/components/ProductSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { PricingSection } from "@/components/PricingSection";
import { TrialCtaSection } from "@/components/TrialCtaSection";
import { SiteFooter } from "@/components/SiteFooter";
import { PERSOOCRM_LOGO_URL, PERSOO_APP_URL } from "@/config/brand";

/**
 * Link do vídeo de demonstração (watch, youtu.be ou shorts).
 * Opcional: defina `NEXT_PUBLIC_PERSOOCRM_YOUTUBE_URL` no `.env.local` (tem prioridade).
 */
const YOUTUBE_LINK_FALLBACK =
  "https://www.youtube.com/shorts/kwuvgOSIZi0";

const youtubeLink =
  process.env.NEXT_PUBLIC_PERSOOCRM_YOUTUBE_URL?.trim() ||
  YOUTUBE_LINK_FALLBACK;

function NavDot() {
  return (
    <span
      className="mx-3 hidden h-1 w-1 shrink-0 rounded-full bg-neutral-400/80 sm:inline-block"
      aria-hidden
    />
  );
}

function heroEmbedSrc(videoId: string) {
  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
}

export function PersooLanding() {
  const videoId = getYouTubeVideoId(youtubeLink);
  const embedSrc = videoId ? heroEmbedSrc(videoId) : null;

  return (
    <div className="relative min-h-full overflow-x-hidden bg-[#ececec] text-neutral-950">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <div className="rounded-[2.25rem] border border-white/60 bg-gradient-to-b from-white via-[#fbfbfb] to-[#f0f0f2] p-5 shadow-[0_30px_80px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
          <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src={PERSOOCRM_LOGO_URL}
                  alt="persooCRM logo"
                  width={200}
                  height={48}
                  className="h-8 w-auto object-contain object-left sm:h-9"
                  priority
                />
              </Link>
            </div>

            <nav
              className="flex flex-wrap items-center justify-center gap-y-2 text-sm font-medium text-neutral-700"
              aria-label="Principal"
            >
              <Link className="hover:text-black" href="#produto">
                Produto
              </Link>
              <NavDot />
              <Link className="hover:text-black" href="#solucoes">
                Soluções
              </Link>
              <NavDot />
              <Link className="hover:text-black" href="#precos">
                Preços
              </Link>
            </nav>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
              <Link
                href={PERSOO_APP_URL}
                className="text-sm font-medium text-neutral-800 underline-offset-4 hover:underline"
              >
                Entrar
              </Link>
              <Link
                href={PERSOO_APP_URL}
                className="rounded-full border border-black px-5 py-2.5 text-sm font-semibold tracking-tight text-black transition hover:bg-black hover:text-white"
              >
                Começar agora — é simples
              </Link>
            </div>
          </header>

          <main className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <div className="space-y-8">
              <div>
                <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-[-0.03em] text-black sm:text-6xl lg:text-7xl">
                  persooCRM
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
                  Impulsione vendas com um CRM que aprende a sua rotina comercial
                  e reorganiza prioridades, tarefas e follow-ups com IA — até{" "}
                  <span className="font-semibold text-neutral-900">
                    50× mais rápido
                  </span>{" "}
                  do que planilhas e lembretes soltos.
                </p>
              </div>

              <div className="text-sm text-neutral-700">
                <p className="font-medium text-neutral-900">
                  Adoram a performance · 100% satisfeitos
                </p>
                <p className="text-neutral-500">
                  <span className="text-amber-500">★</span> 4,9 média em
                  equipes comerciais
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href={PERSOO_APP_URL}
                  className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/15 transition hover:bg-neutral-900"
                >
                  Experimentar — R$ 79,90/usuário/mês
                </Link>
                <Link
                  href={PERSOO_APP_URL}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-neutral-800 underline-offset-4 hover:underline"
                >
                  Ver planos e funcionalidades ↗
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <motion.div
                className="relative mx-auto w-full max-w-[min(100%,320px)] overflow-hidden rounded-[1.75rem] shadow-[0_40px_80px_rgba(15,23,42,0.18)] ring-1 ring-black/5 lg:ml-auto lg:mr-0"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                {embedSrc ? (
                  <div className="relative aspect-[9/16] w-full bg-black">
                    <iframe
                      src={embedSrc}
                      title="Demonstração persooCRM no YouTube"
                      className="absolute inset-0 h-full w-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="eager"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[9/16] w-full items-center justify-center bg-neutral-100 px-6 text-center text-sm text-neutral-500">
                    Defina{" "}
                    <code className="mx-1 rounded bg-neutral-200 px-1 text-xs">
                      NEXT_PUBLIC_PERSOOCRM_YOUTUBE_URL
                    </code>{" "}
                    ou o fallback no código para mostrar o vídeo aqui.
                  </div>
                )}
              </motion.div>
            </div>
          </main>
        </div>

        <ProductSection />
        <SolutionsSection />
        <PricingSection />
        <TrialCtaSection />
      </div>

      <SiteFooter />
    </div>
  );
}
