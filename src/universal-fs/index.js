import { Platform } from 'quasar'
import downloadFile from './downloadFile'
let platformTools

if (Platform.is.electron) {
  platformTools = require('./electron')
}
if (Platform.is.cordova) {
  platformTools = require('./cordova')
}
if (!platformTools) {
  platformTools = require('./web')
}
if (platformTools.default) platformTools = platformTools.default
platformTools.downloadFile = downloadFile
export default platformTools
