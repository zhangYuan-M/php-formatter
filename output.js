const vscode = require('vscode');
let outputChannel;
module.exports = msg => {
    if (outputChannel === undefined) {
        outputChannel = vscode.window.createOutputChannel('formatter');
        outputChannel.show();
    }
    outputChannel.appendLine(msg);
};
