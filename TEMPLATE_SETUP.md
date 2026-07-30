# Template setup

Complete these steps after creating a repository from this template.

## Application identity

- [ ] Rename the root package in `package.json`.
- [ ] Rename `@electron-react-template/desktop`.
- [ ] Replace `Desktop App` with the product name.
- [ ] Replace `com.example.desktopapp` with a reverse-domain application ID.
- [ ] Update the package description.
- [ ] Update the package author.
- [ ] Update the HTML title.
- [ ] Replace the initial React content.
- [ ] Add application icons.

## Distribution

- [ ] Configure macOS signing.
- [ ] Configure Apple notarization.
- [ ] Review Windows packaging.
- [ ] Review Linux package metadata.
- [ ] Define the initial application version.

## Repository automation

- [ ] Grant the Mend Renovate GitHub App access to the repository.
- [ ] Review `.github/renovate.json`.
- [ ] Confirm that the Renovate Dependency Dashboard is created.
- [ ] Review major dependency updates before approving them.

## Verification

```bash
pnpm install --frozen-lockfile
pnpm verify:electron
pnpm lint
pnpm typecheck
pnpm build
pnpm build:unpack
pnpm dev
```
