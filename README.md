# Agent Formation for VS Code

> VS Code extension for Agent Formation files — syntax highlighting, validation, linting, and IntelliSense.

⚠️ **Coming soon** — This repo is a placeholder.

---

## Planned Features

### Syntax Highlighting
Full syntax highlighting for `.afs` and `.yaml` formation files.

### File Icons
Custom file icons for Agent Formation files in the explorer:
- `formation.afs` — Formation icon
- `agents/*.afs` — Agent icon
- `mcp/*.afs` — MCP icon
- `a2a/*.afs` — A2A icon

### IntelliSense / Autocomplete
- Field name completion
- Value suggestions (e.g., LLM model names, auth types)
- Secret reference completion (`${{ secrets. }}`)
- Schema-aware suggestions based on context

### Validation
Real-time validation powered by `afs-cli`:
- Red squiggles on errors
- Problems panel integration
- Quick fixes where applicable

### Linting
Best practice warnings:
- Yellow squiggles for lint issues
- Suggestions for improvements
- Auto-fix support

### Hover Documentation
Hover over any field to see:
- Field description
- Type information
- Default value
- Examples

### Snippets
Quick scaffolding:
- `formation` — New formation file
- `agent` — New agent definition
- `mcp` — New MCP server
- `a2a` — New A2A service

### Go to Definition
- Click on agent references to jump to agent file
- Click on MCP server references to jump to MCP file
- Click on secret references to see where they're used

---

## Installation

### VS Code Marketplace
```
ext install agent-formation.vscode-afs
```

Or search "Agent Formation" in the Extensions panel.

### Requirements
- VS Code 1.80.0 or higher
- `afs-cli` installed and in PATH (for validation/linting)

---

## Configuration

```json5
{
  // Enable/disable validation
  "afs.validate.enable": true,
  
  // Enable/disable linting
  "afs.lint.enable": true,
  
  // Path to afs-cli binary (if not in PATH)
  "afs.cli.path": "/usr/local/bin/afs",
  
  // Validate on save
  "afs.validateOnSave": true,
  
  // Auto-format on save
  "afs.formatOnSave": false
}
```

---

## File Associations

The extension automatically associates:
- `*.afs` → Agent Formation
- `formation.yaml` → Agent Formation
- `agents/*.yaml` → Agent Formation
- `mcp/*.yaml` → Agent Formation
- `a2a/*.yaml` → Agent Formation

To manually associate other files, add to `settings.json`:

```json
{
  "files.associations": {
    "*.myformation": "afs"
  }
}
```

---

## Commands

| Command | Description |
|---------|-------------|
| `AFS: Validate File` | Validate current file |
| `AFS: Validate Workspace` | Validate all formation files |
| `AFS: Lint File` | Lint current file |
| `AFS: Format File` | Format current file |
| `AFS: New Formation` | Create new formation from template |
| `AFS: New Agent` | Create new agent from template |

---

## Snippets

| Prefix | Description |
|--------|-------------|
| `afs-formation` | New formation file scaffold |
| `afs-agent` | New agent definition |
| `afs-mcp` | New MCP server |
| `afs-mcp-http` | New HTTP-based MCP server |
| `afs-a2a` | New A2A service |
| `afs-secret` | Secret reference |
| `afs-usercred` | User credential reference |

---

## Architecture

```
vscode-afs/
├── src/
│   ├── extension.ts       # Extension entrypoint
│   ├── providers/
│   │   ├── completion.ts  # IntelliSense
│   │   ├── hover.ts       # Hover documentation
│   │   ├── validation.ts  # Validation (via afs-cli)
│   │   ├── linting.ts     # Linting (via afs-cli)
│   │   └── formatting.ts  # Formatting (via afs-cli)
│   ├── schema/            # JSON Schema definitions
│   └── snippets/          # Snippet definitions
├── syntaxes/
│   └── afs.tmLanguage.json  # TextMate grammar
├── icons/                 # File icons
├── package.json           # Extension manifest
└── language-configuration.json
```

---

## Development

```bash
# Clone
git clone https://github.com/agent-formation/vscode-afs
cd vscode-afs

# Install dependencies
npm install

# Compile
npm run compile

# Run in development
# Press F5 in VS Code to launch Extension Development Host
```

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## License

Apache License 2.0
