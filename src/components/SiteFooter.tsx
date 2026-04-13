import Image from "next/image";
import Link from "next/link";
import { PERSOOCRM_LOGO_URL } from "@/config/brand";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-neutral-200/90 bg-neutral-100/90">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src={PERSOOCRM_LOGO_URL}
                alt="persooCRM logo"
                width={200}
                height={48}
                className="h-9 w-auto object-contain object-left sm:h-10"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-600">
              CRM com IA que se adapta à sua rotina comercial. Menos planilhas,
              mais fechos.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm font-medium text-neutral-800">
              <li>
                <Link href="#produto" className="hover:text-black hover:underline">
                  Produto
                </Link>
              </li>
              <li>
                <Link href="#solucoes" className="hover:text-black hover:underline">
                  Soluções
                </Link>
              </li>
              <li>
                <Link href="#precos" className="hover:text-black hover:underline">
                  Preços
                </Link>
              </li>
              <li>
                <Link href="#teste-gratis" className="hover:text-black hover:underline">
                  Teste grátis
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-200/80 pt-8 text-center text-xs text-neutral-500">
          © {year} persooCRM. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
