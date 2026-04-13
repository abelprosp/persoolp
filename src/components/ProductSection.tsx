"use client";

import { CrmWireframe } from "@/components/CrmWireframe";

export function ProductSection() {
  return (
    <section
      id="produto"
      className="mt-14 scroll-mt-28 sm:mt-20"
      aria-labelledby="produto-heading"
    >
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold text-violet-700">Produto</p>
        <h2
          id="produto-heading"
          className="font-display mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
        >
          O painel que evolui com a sua operação
        </h2>
        <p className="mt-3 text-base leading-relaxed text-neutral-600">
          Leads, negócios, tarefas e métricas num só lugar. A IA destaca o que
          importa para o seu contexto — como no módulo de personalização e
          telefonia do exemplo abaixo.
        </p>
      </div>
      <CrmWireframe />
    </section>
  );
}
