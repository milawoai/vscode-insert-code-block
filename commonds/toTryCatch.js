/*
 * @Author: zhou shijie.zhou@renren-inc.com
 * @Date: 2023-02-01 11:58:12
 * @LastEditors: zhou shijie.zhou@renren-inc.com
 * @LastEditTime: 2023-02-03 16:12:30
 * @FilePath: /insertcodetoblock/commonds/toTryCatch.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const vscode = require('vscode')
const {
  getSelectedLines,
  getSelectedStartSWord,
} = require('../utils/index')

exports.toTryCatch = async function (){

  let editor = vscode.window.activeTextEditor
  const {
    start: selectLintStart,
    end: selectLintEnd,
    selectedLine,
  } = getSelectedLines()

  const selectedStartSWord = getSelectedStartSWord()
  let lines = selectedLine.split('\n')
  let indentation = editor.options.insertSpaces
     ? ' '.repeat(editor.options.tabSize)
     : '\t'
  let indentedLines = lines.map((line) => indentation + line)
  let indentedLine = indentedLines.join('\n')
 
  let wrappedText = `${selectedStartSWord}try {\n${indentedLine}\n${indentation}} catch (error) {\n${selectedStartSWord}${indentation}console.error(error);\n${selectedStartSWord}}`
  try {
    editor.edit((editBuilder) => {
      editBuilder.replace(
        new vscode.Range(selectLintStart, selectLintEnd),
        wrappedText
      )
    })
  } catch (error) { 
    console.warn(error)
    vscode.window.showInformationMessage('insertcodetoblo???ck! toTryCatch error:' + error)
  }
}