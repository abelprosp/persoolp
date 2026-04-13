"use client";

import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type TabId = "ia" | "modelo" | "funis" | "relatorios";

const tabs: { id: TabId; label: string }[] = [
  { id: "ia", label: "IA persooCRM" },
  { id: "modelo", label: "Modelo adaptável" },
  { id: "funis", label: "Funis automáticos" },
  { id: "relatorios", label: "Relatórios" },
];

const panels: Record<TabId, { title: string; body: string; mock: ReactNode }> =
  {
  ia: {
    title: "Pergunte e a IA faz por você",
    body: "Como fechar o deal com a empresa X? A IA analisa o seu histórico, sugere próximos passos e monta a estratégia ideal — sem você perder tempo a caçar dados em abas diferentes.",
    mock: <IaMock />,
  },
  modelo: {
    title: "Prioridades que mudam com o seu dia",
    body: "O persooCRM aprende padrões de contato, setor e equipe. A interface e os lembretes reorganizam-se para refletir o que está mesmo a aquecer no pipeline.",
    mock: <ModeloMock />,
  },
  funis: {
    title: "Funis que avançam sozinhos até o limite certo",
    body: "Regras inteligentes movem leads entre etapas, disparam tarefas e avisam o comercial quando a probabilidade de fecho sobe — sempre alinhado à sua metodologia.",
    mock: <FunisMock />,
  },
  relatorios: {
    title: "Relatórios que respondem à primeira pergunta",
    body: "Indicadores prontos para revisão semanal, comerciais e direção: conversão, ciclo, receita prevista e saúde do funil, com filtros que a IA sugere conforme o contexto.",
    mock: <RelatoriosMock />,
  },
};

export function SolutionsSection() {
  const [active, setActive] = useState<TabId>("ia");
  const baseId = useId();
  const panel = panels[active];

  return (
    <section
      id="solucoes"
      className="mt-16 scroll-mt-28 sm:mt-24"
      aria-labelledby="solucoes-heading"
    >
      <p className="text-sm font-semibold text-violet-700">Soluções</p>
      <h2
        id="solucoes-heading"
        className="font-display mt-2 max-w-2xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
      >
        Tudo o que precisa para vender com método e velocidade
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600">
        Explore como cada pilar do persooCRM se encaixa na sua operação — da
        conversa com a IA à visão consolidada em relatórios.
      </p>

      <div
        className="mt-10 border-b border-neutral-200"
        role="tablist"
        aria-label="Soluções persooCRM"
      >
        <div className="-mb-px flex flex-wrap gap-x-1 gap-y-2">
          {tabs.map((t) => {
            const selected = active === t.id;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`${baseId}-tab-${t.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${t.id}`}
                onClick={() => setActive(t.id)}
                className={`relative px-1 pb-3 text-sm font-medium transition sm:px-3 sm:text-base ${
                  selected
                    ? "text-black"
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                {t.label}
                {selected ? (
                  <motion.span
                    layoutId="solucoes-tabline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-black"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              role="tabpanel"
              id={`${baseId}-panel-${active}`}
              aria-labelledby={`${baseId}-tab-${active}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <h3 className="font-display text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                {panel.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                {panel.body}
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`mock-${active}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="rounded-xl border border-neutral-200 bg-neutral-50/80 p-4 sm:p-5"
            >
              {panel.mock}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function IaMock() {
  return (
    <div className="space-y-3">
      <p className="font-display text-base font-bold text-neutral-900">
        persooCRM
      </p>
      <div className="rounded-lg border border-neutral-200 bg-neutral-100/90 px-3 py-2.5 text-sm text-neutral-800">
        Como ganhar o deal com Greenleaf?
      </div>
      <p className="text-xs italic text-neutral-500">
        Analisando histórico de interações…
      </p>
      <div className="rounded-lg border border-neutral-200 bg-neutral-100/90 px-3 py-2.5 text-sm text-neutral-800">
        <span className="font-semibold text-neutral-900">
          3 ações sugeridas
        </span>{" "}
        baseadas no perfil
      </div>
    </div>
  );
}

function ModeloMock() {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
        Contexto detectado
      </p>
      <div className="flex flex-wrap gap-2">
        {["B2B", "Ciclo longo", "Equipe 6 pessoas"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-900"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs text-neutral-600">
        <span className="font-medium text-neutral-900">Painel hoje:</span>{" "}
        prioridade em follow-ups · vista compacta de negócios
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
        <motion.div
          className="h-full rounded-full bg-violet-500"
          initial={{ width: "0%" }}
          animate={{ width: "78%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
      <p className="text-[11px] text-neutral-500">
        Ajuste contínuo conforme o volume de leads e as metas do trimestre.
      </p>
    </div>
  );
}

function FunisMock() {
  const steps = ["Lead", "Qualificado", "Proposta", "Fecho"];
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold text-neutral-600">Funil · Enterprise</p>
      <div className="flex items-end justify-between gap-1">
        {steps.map((label, i) => (
          <div key={label} className="flex flex-1 flex-col items-center gap-1.5">
            <motion.div
              className="w-full max-w-[3.25rem] rounded-t-md bg-gradient-to-t from-violet-600 to-violet-400"
              initial={{ height: 8 }}
              animate={{ height: 24 + i * 14 }}
              transition={{ type: "spring", stiffness: 120, damping: 14, delay: i * 0.06 }}
            />
            <span className="text-[10px] font-medium text-neutral-600">{label}</span>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-dashed border-neutral-300 bg-white/80 px-3 py-2 text-[11px] text-neutral-600">
        <span className="font-medium text-neutral-900">Automático:</span> ao
        marcar reunião como realizada → mover para Proposta e criar tarefa de
        envio de contrato.
      </div>
    </div>
  );
}

function RelatoriosMock() {
  const bars = [45, 70, 55, 85, 60, 90, 75];
  return (
    <div className="space-y-3">
      <div className="flex h-28 items-end gap-1">
        {bars.map((h, i) => (
          <div key={i} className="flex min-w-0 flex-1 flex-col justify-end">
            <motion.div
              className="w-full rounded-t-sm bg-neutral-800/85"
              initial={{ height: 0 }}
              animate={{ height: h }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 14,
                delay: i * 0.04,
              }}
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {[
          { k: "Conversão", v: "24%" },
          { k: "Ciclo médio", v: "18d" },
          { k: "Receita prev.", v: "R$ 142k" },
        ].map((m) => (
          <div
            key={m.k}
            className="rounded-lg border border-neutral-200 bg-white px-2 py-1.5 text-center"
          >
            <p className="text-[10px] text-neutral-500">{m.k}</p>
            <p className="font-display text-sm font-bold text-neutral-900">{m.v}</p>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-neutral-500">
        Filtro sugerido: últimos 30 dias · equipe comercial Sul
      </p>
    </div>
  );
}
