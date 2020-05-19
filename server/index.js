const express = require('express')
const consola = require('consola')
const cors = require('cors')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)
  app.use(cors())
  // app.use('/api', test1)

  // app.get('/', function(req,res) {
  //   res.json({
  //     a: '1'
  //   })
  // })

  //route
  // app.use(api)

  // Listen the server
  app.listen(6001, host)
  consola.ready({
    message: `Server listening on http://${host}:${6001}`,
    badge: true
  })
}
start()
