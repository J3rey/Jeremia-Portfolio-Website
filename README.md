# Jeremia Portfolio

Simple notes for running and developing the site.

## Prerequisites

- Node.js 20+ (includes corepack)
- pnpm (recommended: run `corepack enable` to activate bundled pnpm)

## Install

```sh
pnpm install
```

## Development

Start Vite in dev mode (serves client and hot reloads):

```sh
pnpm dev
```

The server runs at http://localhost:3000/.

## Production build + preview

Build both client and server bundle:

```sh
pnpm build
```

Preview the built client with Vite:

```sh
pnpm preview
```

## Start (production server)

After `pnpm build`, start the bundled server:

```sh
pnpm start
```

This serves the built app from `dist/`.

## Useful scripts

- `pnpm check` – TypeScript type-check.
- `pnpm format` – Prettier format all files.

## Troubleshooting

- If pnpm prompts to recreate `node_modules`, answer yes (or rerun with `--force`).
- If Vite port 3000 is busy, run `pnpm dev -- --port 5173` and open that port instead.
