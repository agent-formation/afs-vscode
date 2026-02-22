# AGENTS

## Project Description

`afs-vscode` is a VS Code extension for Agent Formation Schema (AFS) authoring.

Primary goals:

- Treat `*.afs` as YAML in VS Code
- Provide schema-aware IntelliSense and validation for:
  - `formation.afs` and `formation.yaml`
  - `agents/*.afs` and `agents/*.yaml`
  - `mcp/*.afs` and `mcp/*.yaml`
  - `a2a/*.afs` and `a2a/*.yaml`
- Offer practical snippets for common AFS documents
- Add interpolation completions for:
  - `${{ secrets.NAME }}`
  - `${{ env.VAR }}`
  - `${{ user.credentials.SERVICE }}`

## Current Design Choices

- Uses local JSON schema files in `src/schemas`.
- Uses explicit, non-overlapping `yamlValidation` file matchers.
- Avoids remote schema resolution.
- Does not include custom file icon themes.

## Important Files

- `package.json`: extension metadata, associations, schema mappings
- `src/extension.js`: completion provider
- `src/schemas/*.json`: AFS schema definitions
- `src/snippets/afs.code-snippets`: snippet templates
- `README.md`: user-facing behavior and setup
- `CONTRIBUTING.md`: contributor workflow

## Packaging

- Build VSIX with `vsce package`.
- Keep version in `package.json` aligned with packaged VSIX output.
