"use client";

import { motion, useReducedMotion } from "framer-motion";

const navItems = [
  "Notificações",
  "Dashboard",
  "Leads",
  "Negócios",
  "Contatos",
  "Organizações",
  "Planos",
  "Notas",
  "Tarefas",
];

const kpis = [
  { label: "Total de leads", value: "847" },
  { label: "Tempo médio", value: "2.4d" },
  { label: "Negócios em curso", value: "32" },
  { label: "Negócios ganhos", value: "18" },
  { label: "Valor médio ganho", value: "R$12k" },
];

const salesHeights = [40, 65, 45, 80, 55, 90, 70, 50, 75, 60, 85, 45];
const revenueHeights = [55, 70, 50, 85, 60, 95, 75, 65, 80, 70, 88, 72];

export function CrmWireframe() {
  const reduce = useReducedMotion() ?? false;

  const loopBars = !reduce;

  return (
    <div className="overflow-x-auto rounded-2xl border border-neutral-200/90 bg-[#f9fafb] p-3 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-4">
      <motion.div
        className="flex min-w-[min(100%,520px)] gap-3 sm:min-w-[640px] sm:gap-4"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Sidebar */}
        <aside className="flex w-[7.5rem] shrink-0 flex-col rounded-xl border border-dashed border-neutral-300/80 bg-white/80 p-2.5 sm:w-36">
          <div className="mb-3 flex items-center gap-2 border-b border-neutral-100 pb-2">
            <div className="h-7 w-7 shrink-0 rounded-full border border-dashed border-neutral-300 bg-neutral-100" />
            <span className="font-display text-[10px] font-bold leading-tight text-neutral-800 sm:text-xs">
              persooCRM
            </span>
          </div>
          <nav className="flex flex-1 flex-col gap-1" aria-hidden>
            {navItems.map((label, i) => {
              const active = label === "Dashboard";
              return (
                <motion.div
                  key={label}
                  className={`flex items-center gap-1.5 rounded-lg px-1.5 py-1 text-[9px] sm:text-[10px] ${
                    active
                      ? "border border-neutral-200 bg-neutral-100 font-semibold text-neutral-900"
                      : "text-neutral-500"
                  }`}
                  initial={reduce ? false : { opacity: 0, x: -6 }}
                  whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-sm bg-neutral-300" />
                  <span className="truncate">{label}</span>
                </motion.div>
              );
            })}
          </nav>
          <div className="mt-2 border-t border-neutral-100 pt-2">
            <div className="mb-1 flex items-center gap-1.5 rounded-lg px-1.5 py-1 text-[9px] text-neutral-500 sm:text-[10px]">
              <span className="h-1.5 w-1.5 rounded-sm bg-neutral-300" />
              Admin
            </div>
            <motion.div
              className="flex items-center gap-1.5 rounded-lg border border-violet-200 bg-violet-50 px-1.5 py-1 text-[9px] font-medium text-violet-900 sm:text-[10px]"
              animate={
                loopBars
                  ? { boxShadow: ["0 0 0 0 rgba(139,92,246,0)", "0 0 0 4px rgba(139,92,246,0.12)", "0 0 0 0 rgba(139,92,246,0)"] }
                  : undefined
              }
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="h-1.5 w-1.5 rounded-sm bg-violet-400" />
              IA — personalizar
            </motion.div>
          </div>
        </aside>

        {/* Main dashboard */}
        <div className="min-w-0 flex-1 space-y-2.5 rounded-xl border border-dashed border-neutral-300/80 bg-white/90 p-2.5 sm:space-y-3 sm:p-3">
          <div className="flex items-center justify-between gap-2">
            <span className="font-display text-sm font-bold text-neutral-900 sm:text-base">
              Dashboard
            </span>
            <div className="flex gap-1.5">
              <div className="h-6 w-14 rounded-md border border-dashed border-neutral-300 bg-neutral-50" />
              <div className="h-6 w-14 rounded-md border border-dashed border-neutral-300 bg-neutral-50" />
            </div>
          </div>

          {/* IA banner */}
          <motion.div
            className="rounded-lg border border-violet-200 bg-violet-50/90 px-2.5 py-2 sm:px-3"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[9px] font-medium leading-snug text-violet-950 sm:text-[10px]">
              <span className="text-neutral-600">Personalização ativa · </span>
              <TypingLine reduced={reduce} />
            </p>
            <p className="mt-1 text-[8px] leading-relaxed text-violet-800/80 sm:text-[9px]">
              Personalização focada em gestão de planos de voz e internet.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[8px] text-neutral-600 sm:text-[9px]">
              <span className="opacity-60">▣</span> 30
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[8px] text-neutral-600 sm:text-[9px]">
              <span className="opacity-60">◎</span> sales
            </span>
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-5 sm:gap-2">
            {kpis.map((k, i) => (
              <motion.div
                key={k.label}
                className="rounded-lg border border-neutral-200 bg-white px-2 py-1.5 shadow-sm"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                  delay: 0.06 * i,
                }}
              >
                <p className="text-[7px] text-neutral-500 sm:text-[8px]">{k.label}</p>
                <motion.p
                  className="mt-0.5 font-display text-sm font-bold tabular-nums text-neutral-900 sm:text-base"
                  initial={reduce ? false : { opacity: 0.3 }}
                  whileInView={reduce ? undefined : { opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  {k.value}
                </motion.p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white px-2.5 py-2 shadow-sm">
              <p className="text-[8px] text-neutral-500 sm:text-[9px]">
                Valor médio do negócio
              </p>
              <p className="font-display text-lg font-bold text-neutral-900">R$8.2k</p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white px-2.5 py-2 shadow-sm">
              <p className="text-[8px] text-neutral-500 sm:text-[9px]">
                Tempo médio para fechar
              </p>
              <p className="font-display text-lg font-bold text-neutral-900">12 dias</p>
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <ChartBlock
              title="Tendência de vendas"
              heights={salesHeights}
              accent="neutral"
              reduced={reduce}
            />
            <ChartBlock
              title="Receita prevista"
              heights={revenueHeights}
              accent="violet"
              reduced={reduce}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function TypingLine({ reduced }: { reduced: boolean }) {
  return (
    <span className="inline">
      telefonia
      {!reduced ? (
        <motion.span
          className="ml-0.5 inline-block h-3 w-px translate-y-0.5 bg-violet-600"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.9, repeat: Infinity }}
          aria-hidden
        />
      ) : (
        <span className="text-neutral-400"> |</span>
      )}
    </span>
  );
}

function ChartBlock({
  title,
  heights,
  accent,
  reduced,
}: {
  title: string;
  heights: number[];
  accent: "neutral" | "violet";
  reduced: boolean;
}) {
  const fill =
    accent === "violet"
      ? "bg-violet-400/80"
      : "bg-neutral-300/90";

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-2 shadow-sm">
      <p className="mb-2 text-[9px] font-semibold text-neutral-800 sm:text-[10px]">
        {title}
      </p>
      <div className="flex h-20 gap-0.5 sm:h-24 sm:gap-px">
        {heights.map((h, i) => (
          <div
            key={i}
            className="flex min-w-0 flex-1 flex-col justify-end"
          >
            <motion.div
              className={`w-full rounded-t-sm ${fill}`}
              initial={reduced ? false : { height: "0%" }}
              whileInView={reduced ? undefined : { height: `${h}%` }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                type: "spring",
                stiffness: 110,
                damping: 17,
                delay: reduced ? 0 : 0.018 * i,
              }}
            />
          </div>
        ))}
      </div>
      {accent === "violet" ? (
        <p className="mt-1.5 text-[7px] text-neutral-400 sm:text-[8px]">
          Previsto vs real
        </p>
      ) : null}
    </div>
  );
}
