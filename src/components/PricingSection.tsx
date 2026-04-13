import Link from "next/link";
import { PERSOO_APP_URL } from "@/config/brand";

const featuresEquipe = [
  "IA que adapta prioridades e tarefas à sua rotina comercial",
  "Leads, negócios, contatos e funis num único painel",
  "Automações e lembretes alinhados ao seu método de vendas",
  "Relatórios e indicadores prontos para revisão com a equipe",
  "Atualizações contínuas do produto incluídas na assinatura",
];

const featuresConsulta = [
  "Tudo do plano por usuário, com limites e módulos alinhados ao contrato",
  "Integrações, API e ambientes dedicados quando necessário",
  "SLA de suporte, onboarding assistido e treinamento da equipe",
  "Governança, permissões avançadas e múltiplas unidades de negócio",
  "Roadmap conjunto e ajustes de IA para o seu contexto regulatório",
];

export function PricingSection() {
  return (
    <section
      id="precos"
      className="mt-16 scroll-mt-28 sm:mt-24"
      aria-labelledby="precos-heading"
    >
      <p className="text-sm font-semibold text-violet-700">Preços</p>
      <h2
        id="precos-heading"
        className="font-display mt-2 max-w-2xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
      >
        Escolha o ritmo da sua operação
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600">
        Plano por usuário em reais para equipes que querem começar já, ou
        proposta sob consulta para empresas com requisitos específicos.
      </p>

      <div className="mt-10 grid max-w-4xl gap-6 sm:gap-8 lg:mx-auto lg:grid-cols-2">
        <article className="relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_28px_70px_rgba(15,23,42,0.08)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-600 via-violet-500 to-orange-500" />
          <div className="flex flex-1 flex-col p-8 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">
              Plano persooCRM
            </p>
            <h3 className="font-display mt-2 text-2xl font-bold text-neutral-900">
              Equipe
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              CRM com IA, funis e relatórios — cobrança por pessoa que usa o
              sistema, ideal para PMEs e squads comerciais.
            </p>

            <div className="mt-8 flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
              <span className="text-sm font-semibold text-neutral-600">R$</span>
              <span className="font-display text-5xl font-bold tracking-tight text-neutral-900 sm:text-6xl">
                79,90
              </span>
              <span className="text-base font-medium text-neutral-500">
                /usuário/mês
              </span>
            </div>
            <p className="mt-1 text-xs text-neutral-500">
              Valor em reais (BRL), por usuário ativo, faturação mensal.
            </p>

            <ul className="mt-8 flex-1 space-y-3 text-sm text-neutral-700">
              {featuresEquipe.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs text-violet-800"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href={PERSOO_APP_URL}
              className="mt-10 flex w-full items-center justify-center rounded-full bg-black py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-900"
            >
              Começar — R$ 79,90 por usuário/mês
            </Link>
            <p className="mt-4 text-center text-xs text-neutral-500">
              Cancele quando quiser · sem fidelidade obrigatória
            </p>
          </div>
        </article>

        <article className="relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50/80 shadow-[0_20px_50px_rgba(15,23,42,0.05)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-neutral-300" />
          <div className="flex flex-1 flex-col p-8 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600">
              Empresas &amp; operações complexas
            </p>
            <h3 className="font-display mt-2 text-2xl font-bold text-neutral-900">
              Sob consulta
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Volume, integrações, compliance ou várias filiais? Montamos um
              pacote e um investimento à medida da sua organização.
            </p>

            <div className="mt-8">
              <p className="font-display text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                Sob consulta
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Proposta personalizada após conversa com vendas.
              </p>
            </div>

            <ul className="mt-8 flex-1 space-y-3 text-sm text-neutral-700">
              {featuresConsulta.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white text-xs text-neutral-700"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="mailto:vendas@persoocrm.com.br?subject=Proposta%20persooCRM%20-%20plano%20sob%20consulta"
              className="mt-10 flex w-full items-center justify-center rounded-full border-2 border-black bg-white py-3.5 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
            >
              Falar com vendas
            </a>
            <p className="mt-4 text-center text-xs text-neutral-500">
              Resposta em até 1 dia útil · vendas@persoocrm.com.br
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
