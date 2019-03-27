/* global expect test jest beforeEach */
const index = require('../../src/index.js')
let conf
let opts
beforeEach(() => {
  conf = { boot: [], build: { transpileDependencies: { push: jest.fn() } } }
  opts = {
    extendQuasarConf: jest.fn((cb) => {
      cb(conf)
    })
  }
})

test('exports properly', () => {
  expect(index(opts)).toBe(undefined)
})

test('extendQuasarConf is called', () => {
  index(opts)
  expect(opts.extendQuasarConf).toBeCalled()
})

test('boot is have some options', () => {
  index(opts)
  expect(conf.boot.length).toBeGreaterThan(0)
})

test('dependencise have been compiled', () => {
  index(opts)
  expect(conf.build.transpileDependencies.push).toBeCalled()
})

test('boot still works if its blank', () => {
  conf.boot = undefined
  index(opts)
  expect(conf.boot.length).toBeGreaterThan(0)
})

test('doesnt add a second boot', () => {
  conf.boot = ['~@quasar/quasar-app-extension-universal-fs/boot/universal-fs.js']
  index(opts)
  expect(conf.boot.length).toBe(1)
})
