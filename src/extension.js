const vscode = require("vscode");

const INTERPOLATION_COMPLETIONS = [
  {
    key: "secrets",
    detail: "Formation secret reference",
    doc: "Interpolate a formation-level secret value.",
    snippet: "${{ secrets.${1:SECRET_NAME} }}"
  },
  {
    key: "env",
    detail: "Environment variable reference",
    doc: "Interpolate an environment variable.",
    snippet: "${{ env.${1:VARIABLE_NAME} }}"
  },
  {
    key: "user.credentials",
    detail: "Per-user credential reference",
    doc: "Interpolate a user-scoped credential value.",
    snippet: "${{ user.credentials.${1:service_name} }}"
  }
];

function normalizePath(fsPath) {
  return fsPath.replace(/\\/g, "/").toLowerCase();
}

function isAfsLikeDocument(document) {
  const path = normalizePath(document.uri.fsPath);
  if (path.endsWith(".afs")) {
    return true;
  }

  if (path.endsWith("/formation.yaml")) {
    return true;
  }

  return /\/(agents|mcp|a2a)\/[^/]+\.ya?ml$/.test(path);
}

function shouldSuggestInterpolation(linePrefix) {
  return /\$\{\{\s*[\w.-]*$/.test(linePrefix) || /:\s*["']?\s*$/.test(linePrefix);
}

function provideInterpolationCompletionItems(document, position) {
  if (!isAfsLikeDocument(document)) {
    return undefined;
  }

  const linePrefix = document.lineAt(position).text.slice(0, position.character);
  if (!shouldSuggestInterpolation(linePrefix)) {
    return undefined;
  }

  return INTERPOLATION_COMPLETIONS.map((entry) => {
    const item = new vscode.CompletionItem(entry.key, vscode.CompletionItemKind.Value);
    item.detail = entry.detail;
    item.documentation = new vscode.MarkdownString(entry.doc);
    item.insertText = new vscode.SnippetString(entry.snippet);
    item.sortText = `0-${entry.key}`;
    return item;
  });
}

function activate(context) {
  const provider = vscode.languages.registerCompletionItemProvider(
    { language: "yaml", scheme: "file" },
    { provideCompletionItems: provideInterpolationCompletionItems },
    "$",
    "{",
    "."
  );

  context.subscriptions.push(provider);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
