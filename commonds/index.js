/*
 * @Author: zhou shijie.zhou@renren-inc.com
 * @Date: 2023-02-01 12:07:49
 * @LastEditors: zhou shijie.zhou@renren-inc.com
 * @LastEditTime: 2023-02-06 15:50:34
 * @FilePath: /insertcodetoblock/commonds/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { toTryCatch } = require('./toTryCatch')
const { toFuction } = require('./toFuction')
const { toArrowFuction } = require('./toArrowFuction')
const { toDialogTrack } = require('./toDialogTrack')

exports.commonds = {
  toTryCatch,
  toFuction,
  toArrowFuction,
  toDialogTrack
}
