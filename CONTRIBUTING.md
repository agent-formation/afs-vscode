# Contributing

Thanks for contributing to `afs-vscode`.

## Project Scope

This extension provides:

- YAML language associations for Agent Formation files (`.afs`, canonical `.yaml` paths)
- Schema-based validation and IntelliSense for formation/agent/mcp/a2a files
- AFS snippets and interpolation completions

It currently does **not** provide file icon theme overrides.

## Prerequisites

- VS Code `1.85+`
- Node.js and npm
- `vsce` for packaging (`npm i -g @vscode/vsce` or `npx @vscode/vsce`)

## Local Development

1. Open this folder in VS Code.
2. Press `F5` to launch an Extension Development Host.
3. Open sample `.afs` and `.yaml` files to verify schema behavior.

## Repository Layout

- `package.json`: extension manifest, file associations, `yamlValidation` mappings
- `src/extension.js`: interpolation completion provider
- `src/schemas/*.json`: JSON Schemas for AFS document types
- `src/snippets/afs.code-snippets`: snippet definitions

## Schema Change Rules

When modifying schemas:

1. Keep references local (`./common.schema.json#...`).
2. Avoid remote `$id` values that force network fetches.
3. Keep `yamlValidation` matchers non-overlapping to avoid "Multiple JSON Schemas" warnings.
4. Update snippets and docs when field shapes change.

## Validation Checklist

Before committing:

1. Validate JSON files:
   - `node -e "const fs=require('fs'); ['package.json','src/snippets/afs.code-snippets','src/schemas/common.schema.json','src/schemas/formation.schema.json','src/schemas/agent.schema.json','src/schemas/mcp.schema.json','src/schemas/a2a.schema.json'].forEach(f=>JSON.parse(fs.readFileSync(f,'utf8'))); console.log('JSON OK');"`
2. Validate extension entrypoint syntax:
   - `node --check src/extension.js`
3. Package extension:
   - `vsce package`

## Pull Requests

Please include:

- What changed and why
- Any schema-matching or compatibility implications
- New VSIX version produced (if packaging changes)

## Release

1. Bump `version` in `package.json`.
2. Run `vsce package`.
3. Publish via your normal release process.
