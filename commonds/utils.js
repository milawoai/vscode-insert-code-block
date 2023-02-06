/*
 * @Author: zhou shijie.zhou@renren-inc.com
 * @Date: 2023-02-06 09:43:39
 * @LastEditors: zhou shijie.zhou@renren-inc.com
 * @LastEditTime: 2023-02-06 16:24:33
 * @FilePath: /insertcodetoblock/commonds/utils.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const vscode = require('vscode')
const {
  getClipboardText,
  getSelectedLines,
  getSelectedStartSWord,
} = require('../utils/index')

exports.insertblockFactory = function (genWrappedText) {
  return async function () {
    let editor = vscode.window.activeTextEditor
    // const document = editor.document

    // const languageId = document.languageId

    // console.log(`The current file's language ID is ${languageId}`)

    const clipboardText = await getClipboardText()
    const { start: selectLintStart, end: selectLintEnd, selectedLine } = getSelectedLines()
    const selectedStartSWord = getSelectedStartSWord()
    const lines = selectedLine.split('\n')
    const indentation = editor.options.insertSpaces
      ? ' '.repeat(editor.options.tabSize)
      : '\t'
    const indentedLines = lines.map((line) => indentation + line)
    const indentedLine = indentedLines.join('\n')

    const wrappedText = await genWrappedText({
      indentation,
      selectedLine,
      indentedLine,
      clipboardText,
      selectedStartSWord
    })
    try {
      editor.edit((editBuilder) => {
        editBuilder.replace(new vscode.Range(selectLintStart, selectLintEnd), wrappedText)
      })
    } catch (error) {
      console.warn(error)
      vscode.window.showInformationMessage('insertcodetoblock! toTryCatch error:' + error)
    }
  }
}
