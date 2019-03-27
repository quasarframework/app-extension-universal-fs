/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const extendWithUniversalFs = function (api, conf) {
  // make sure there is a boot array
  conf.boot = conf.boot || []

  if (!conf.boot.includes('~@quasar/quasar-app-extension-universal-fs/boot/universal-fs.js')) {
    conf.boot.push('~@quasar/quasar-app-extension-universal-fs/boot/universal-fs.js')
    // make sure boot file transpiles
    conf.build.transpileDependencies.push(/quasar-app-extension-universal-fs[\\/]src[\\/]boot/)
    console.log(` App Extension (universal-fs) Info: 'Adding universal-fs boot reference to your quasar.conf.js'`)
  }
}

module.exports = function (api, ctx) {
  api.extendQuasarConf((conf) => {
    return new Promise((resolve, reject) => {
      extendWithUniversalFs(api, conf)
      resolve()
    })
  })
}
