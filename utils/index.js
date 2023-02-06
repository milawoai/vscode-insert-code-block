/*
 * @Author: zhou shijie.zhou@renren-inc.com
 * @Date: 2021-11-30 21:40:37
 * @LastEditors: zhou shijie.zhou@renren-inc.com
 * @LastEditTime: 2023-02-06 15:58:43
 * @FilePath: /insertcodetoblock/utils/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const copyPaste = require('copy-paste') ;
const vscode = require('vscode');

// 获取粘贴板内容
exports.getClipboardText = function() {
  return new Promise((resolve, reject) => {
    copyPaste.paste((err, text) => {
      if (err !== null) {
        reject(err);
      }
      resolve(text);
    });
  });
}

// 获取选择的文本
exports.getSelectedText = function(isTrim = true) {
  const { selection, document } = vscode.window.activeTextEditor;
  return Promise.resolve(
    isTrim ? document.getText(selection).trim() : document.getText(selection)
  )
}
// 获取与选择的文本同行的所有文本
exports.getSelectedLines = function () {
  let editor = vscode.window.activeTextEditor
  let selection = editor.selection
  let start = selection.start.with(undefined, 0)
  let end = selection.end.with(
    undefined,
    editor.document.lineAt(selection.end.line).text.length
  )
  return {
    start,
    end,
    selectedLine: editor.document.getText(new vscode.Range(start, end)),
  }
}

// 获取与选择的文本同行的从开头到前非空字符之前的文本
exports.getSelectedStartSWord = function () {
  let editor = vscode.window.activeTextEditor
  let selection = editor.selection
  let start = selection.start.with(undefined, 0)
  let lineText = editor.document.lineAt(selection.start.line).text
  let end = selection.start.with(undefined, lineText.search(/\S|$/))

  return editor.document.getText(new vscode.Range(start, end))
}