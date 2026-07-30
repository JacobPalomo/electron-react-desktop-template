# Electron React Desktop Template

A reusable foundation for building secure desktop applications with Electron,
React, TypeScript, Vite, and pnpm.

## Included

- Electron main, preload, and renderer processes
- React with TypeScript
- Vite Fast Refresh
- ESLint and Prettier
- Context isolation and renderer sandboxing
- electron-builder configuration
- Local macOS packaging

## Requirements

- Node.js 24
- pnpm 11

## Install

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

## Validation

```bash
pnpm verify:electron
pnpm lint
pnpm typecheck
pnpm build
```

## Local macOS package

```bash
pnpm build:unpack
```

## Using this template

After creating a repository from this template, follow
[TEMPLATE_SETUP.md](./TEMPLATE_SETUP.md) to customize the application identity.

## License

MIT License. See [LICENSE](./LICENSE).
