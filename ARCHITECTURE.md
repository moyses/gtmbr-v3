# Regras Arquiteturais

## Estrutura de Diretórios

```
src/
├── app/            # Rotas e layouts (App Router). Zero lógica de negócio.
├── components/
│   ├── ui/         # Primitivos UI genéricos (shadcn/ui)
│   ├── layout/     # Estrutura de página (header, footer, nav)
│   ├── sections/   # Seções visuais reutilizáveis (landing page)
│   └── icons/      # Ícones SVG customizados
├── features/       # Features complexas com lógica própria
├── providers/      # React Context providers
├── hooks/          # Custom hooks reutilizáveis
├── i18n/           # Dados e configuração de tradução
└── lib/            # Utilitários puros (sem React)
```

## Regras

1. **App Router only** — Nunca usar Pages Router. Todas as rotas em `src/app/`.

2. **Server Components por padrão** — Só adicionar `'use client'` quando necessário (hooks, eventos, browser APIs).

3. **Sem barrel exports** — Importar direto do arquivo. Exceção: `i18n/index.ts`.

4. **Colocation** — Arquivos que só são usados por uma feature ficam dentro de `features/`.

5. **Naming** — Arquivos em `kebab-case`. Componentes em `PascalCase`. Hooks com prefixo `use-`.

6. **Metadata** — Usar `export const metadata` do Next.js para SEO, não tags `<Head>` manuais.

7. **Fonts** — Usar `next/font/google` no root layout. Nunca importar fonts via CSS/CDN.

8. **Imports** — Usar alias `@/` para todos os imports internos.
