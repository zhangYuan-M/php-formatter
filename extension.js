'use strict';
const vscode = require('vscode');
const php = require('./php');
const provide = {
    provideDocumentFormattingEdits(doc) {
        const range = new vscode.Range(0, 0, doc.lineCount - 1, doc.lineAt(doc.lineCount - 1).text.length);
        return [vscode.TextEdit.replace(range, php(doc.getText(range)))];
    },
};
exports.activate = context => context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider('php', provide));
