const vscode = require('vscode')
const { insertblockFactory } = require('./utils')

exports.toDialogTrack = insertblockFactory(
  async ({ selectedStartSWord, clipboardText, indentation, indentedLine }) => {
    return `${selectedStartSWord}this.$sd.track('dialog', {\n${selectedStartSWord}${indentation}elementCode: ${
      Number(clipboardText) ? clipboardText : 'elementCode'
    },\n${selectedStartSWord}${indentation}extInfo: {}\n${selectedStartSWord}}, () => {\n${indentedLine}\n${selectedStartSWord}})`
  }
)