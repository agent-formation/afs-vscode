# Agent Formation for VS Code

VS Code extension for [Agent Formation Schema](https://github.com/agent-formation/afs-spec) files (`.afs` and canonical `.yaml` layouts).

## Implemented

- YAML syntax highlighting for `*.afs`
- Schema-aware validation and IntelliSense for:
  - canonical `.afs` paths (`formation.afs`, `agents/*.afs`, `mcp/*.afs`, `a2a/*.afs`)
  - canonical `.yaml` paths (`formation.yaml`, `agents/*.yaml`, `mcp/*.yaml`, `a2a/*.yaml`)
- Snippets:
  - `afs-formation`
  - `afs-agent`
  - `afs-mcp`
  - `afs-mcp-http`
  - `afs-a2a`
  - `afs-secret`
  - `afs-usercred`
- Interpolation completions for:
  - `${{ secrets.NAME }}`
  - `${{ env.VAR }}`
  - `${{ user.credentials.SERVICE }}`

## How Schema Compatibility Works

This extension contributes JSON schemas that mirror the Agent Formation structure from:

- `formation.afs`
- `agents/*.afs`
- `mcp/*.afs`
- `a2a/*.afs`

and binds them to YAML files through `yamlValidation` (provided by `redhat.vscode-yaml`).

Canonical `.afs` and `.yaml` paths use dedicated schemas with non-overlapping matchers to avoid "Multiple JSON Schemas" warnings in VS Code.

## Requirements

- VS Code `1.85.0` or higher
- `redhat.vscode-yaml` (declared as an extension dependency and auto-installed)

## Installation (Local Dev)

1. Open this project in VS Code.
2. Press `F5` to launch Extension Development Host.
3. Open an AFS file (for example `formation.afs`) and validate:
   - completions are schema-aware
   - errors show in Problems panel

## File Associations

Default associations contributed by this extension:

```json
{
  "files.associations": {
    "*.afs": "yaml",
    "**/*.afs": "yaml",
    "secrets": "dotenv",
    "**/secrets": "dotenv",
    "formation.yaml": "yaml",
    "**/formation.yaml": "yaml",
    "agents/*.yaml": "yaml",
    "**/agents/*.yaml": "yaml",
    "mcp/*.yaml": "yaml",
    "**/mcp/*.yaml": "yaml",
    "a2a/*.yaml": "yaml",
    "**/a2a/*.yaml": "yaml"
  }
}
```

## Planned Next Steps

- `afs-cli`-powered linting and richer semantic diagnostics
- Hover docs with field metadata/examples
- Go-to-definition across component references

## License

Apache License 2.0
