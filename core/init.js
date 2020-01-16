const Router = require('koa-router')
const requireDirectory = require('require-directory')

class InitManager {
  static initCore(app) {
    // 入口方法
    InitManager.app = app
    InitManager.initLoadRouters()
  }
  static initLoadRouters() {
    // process.cwd() 获取应用的根目录的绝当路径
    const apiDirectory = `${process.cwd()}/app/api/v1`
    requireDirectory(
      module,
      apiDirectory,
      { visit: whenLoadModule })
    function whenLoadModule(obj) {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes())
      }
    }
  }
}


module.exports = InitManager