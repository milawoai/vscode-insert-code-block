/*
 * @Author: zhou shijie.zhou@renren-inc.com
 * @Date: 2023-02-01 11:52:03
 * @LastEditors: zhou shijie.zhou@renren-inc.com
 * @LastEditTime: 2023-02-06 16:20:29
 * @FilePath: /insertcodetoblock/extension.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const { commonds } = require('./commonds/index')

// function addSelectedRighMultiMenu(context) {}
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json

	
	// let disposable = 
	// context.subscriptions.push(disposable);
	context.subscriptions.push(
    vscode.commands.registerCommand(
      'insertcodetoblock.totrycatch',
      function () {
        commonds.toTryCatch()
      }
    ),
    vscode.commands.registerCommand('insertcodetoblock.tofuction', function () {
      commonds.toFuction()
    }),
    vscode.commands.registerCommand(
      'insertcodetoblock.toarrowfuction',
      function () {
        commonds.toArrowFuction()
      }
    ),
    vscode.commands.registerCommand(
      'insertcodetoblock.todialogtrack',
      function () {
        commonds.toDialogTrack()
      }
    )
  )
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
