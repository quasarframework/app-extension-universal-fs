import ufs from '@quasar/quasar-app-extension-universal-fs/src/universal-fs'

export default async ({ Vue }) => {
  Vue.prototype.$ufs = ufs
}
