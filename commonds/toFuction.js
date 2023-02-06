/*
 * @Author: zhou shijie.zhou@renren-inc.com
 * @Date: 2023-02-03 18:24:05
 * @LastEditors: zhou shijie.zhou@renren-inc.com
 * @LastEditTime: 2023-02-06 11:05:21
 * @FilePath: /insertcodetoblock/commonds/toFuction.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const vscode = require('vscode')
const { insertblockFactory } = require('./utils')
exports.toFuction = insertblockFactory(
  async ({ selectedStartSWord, indentedLine }) => {
    let inputFuctionName = await vscode.window.showInputBox({
      placeHolder: '请输入方法名',
      prompt: '当前类型不合法',
    })
    return `${selectedStartSWord}function ${inputFuctionName}() {\n${indentedLine}\n${selectedStartSWord}}`
  }
)
