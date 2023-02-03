/*
 * @Author: zhou shijie.zhou@renren-inc.com
 * @Date: 2023-02-01 11:52:03
 * @LastEditors: zhou shijie.zhou@renren-inc.com
 * @LastEditTime: 2023-02-01 12:14:11
 * @FilePath: /insertcodetoblock/extension.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const { commonds } = require('./commonds/index')


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "insertcodetoblock" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('insertcodetoblock.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		commonds.toTryCatch()
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
