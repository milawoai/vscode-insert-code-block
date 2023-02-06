/*
 * @Author: zhou shijie.zhou@renren-inc.com
 * @Date: 2023-02-01 11:58:12
 * @LastEditors: zhou shijie.zhou@renren-inc.com
 * @LastEditTime: 2023-02-06 15:45:57
 * @FilePath: /insertcodetoblock/commonds/toTryCatch.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: zhou shijie.zhou@renren-inc.com
 * @Date: 2023-02-01 11:58:12
 * @LastEditors: zhou shijie.zhou@renren-inc.com
 * @LastEditTime: 2023-02-06 11:05:14
 * @FilePath: /insertcodetoblock/commonds/toTryCatch.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const { insertblockFactory } = require('./utils')
exports.toTryCatch = insertblockFactory(
  async ({ selectedStartSWord, indentedLine, indentation }) => {
    return `${selectedStartSWord}try {\n${indentedLine}\n${selectedStartSWord}} catch (error) {\n${selectedStartSWord}${indentation}console.error(error);\n${selectedStartSWord}}`
  }
)
