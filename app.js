const Koa = require('koa')
const parser = require('koa-bodyparser')
const initManager = require('./core/init')

const app = new Koa()
app.use(parser())

initManager.initCore(app)

app.listen(3001, () => {
  console.log('koa listen 3001...')
})