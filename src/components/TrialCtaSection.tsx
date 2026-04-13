import Link from "next/link";
import { PERSOO_APP_URL } from "@/config/brand";

export function TrialCtaSection() {
  return (
    <section
      id="teste-gratis"
      className="mt-16 scroll-mt-28 pb-4 sm:mt-24"
      aria-labelledby="trial-cta-heading"
    >
      <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-neutral-900 via-neutral-950 to-black px-6 py-12 text-center shadow-[0_32px_80px_rgba(0,0,0,0.25)] sm:px-10 sm:py-14">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-600/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-orange-500/15 blur-3xl"
          aria-hidden
        />

        <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
          Teste sem risco
        </p>
        <h2
          id="trial-cta-heading"
          className="relative font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          7 dias grátis para ver a IA na sua rotina
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-300">
          Ative o persooCRM, convide a equipe e use funis, tarefas e sugestões
          inteligentes. Cancele antes do fim do período se não fizer sentido
          para si.
        </p>

        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href={PERSOO_APP_URL}
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-neutral-950 shadow-lg transition hover:bg-neutral-100 sm:w-auto"
          >
            Começar teste de 7 dias grátis
          </Link>
          <Link
            href={PERSOO_APP_URL}
            className="text-sm font-medium text-white/90 underline-offset-4 hover:text-white hover:underline"
          >
            Ver preços
          </Link>
        </div>
      </div>
    </section>
  );
}
