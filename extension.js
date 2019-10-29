'use strict';
const vscode = require('vscode');
const php = require('./php');
const provideDocumentRangeFormattingEdits = (doc, range) => {
    range = doc.validateRange(new vscode.Range(new vscode.Position(range.start.line, 0), range.end.translate(0, Number.MAX_VALUE)));
    return Promise.resolve().then(() => php(doc.getText(doc.validateRange(range)))).then(text => [vscode.TextEdit.replace(range, text)], []);
    // vscode.window.showInformationMessage(`Format Code ${JSON.stringify(range, null, 4)}`);
};

exports.activate = context => context.subscriptions.push(vscode.languages.registerDocumentRangeFormattingEditProvider('php', {
    provideDocumentRangeFormattingEdits,
}));
