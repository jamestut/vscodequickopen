'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand('extension.openFile', () => {
    vscode.window.showInputBox({
      value: '',
      prompt: "File name to open",
      placeHolder: "",
      password: false
    }).then((value) => {
      vscode.workspace.openTextDocument(value).then(doc => {
        vscode.window.showTextDocument(doc);
      });
    });
  });

  vscode.commands.registerCommand('extension.openFolder', () => {
    vscode.window.showInputBox({
      value: '',
      prompt: "Folder name to open",
      placeHolder: "",
      password: false
    }).then((value) => {
      let uri = vscode.Uri.file(value);
      vscode.commands.executeCommand('vscode.openFolder', uri);
    });
  });
}

// this method is called when your extension is deactivated
export function deactivate() {
}
