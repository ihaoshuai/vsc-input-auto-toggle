// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { exec } from 'child_process';
import * as vscode from 'vscode';

// const COMMAND_TO_CN = "busctl --user call org.fcitx.Fcitx5 /rime org.fcitx.Fcitx.Rime1 SetAsciiMode b false";
const COMMAND_TO_EN = "busctl --user call org.fcitx.Fcitx5 /rime org.fcitx.Fcitx.Rime1 SetAsciiMode b true";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log("InputAutoToggle Active");
	//change to en when start
	exec(COMMAND_TO_EN);

	let windowFoucsInject = vscode.window.onDidChangeWindowState((e) => {
		if(e.focused) {
			console.debug("window foucs or active");
			exec(COMMAND_TO_EN);
		}
	});

	context.subscriptions.push(windowFoucsInject);
}

// This method is called when your extension is deactivated
export function deactivate() {}
