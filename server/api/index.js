let express = require('express')
let app = express()

let codeTyping = require('./code-typing')
module.exports = () => {
	let router = express.Router()
	router.use('/code-typing', codeTyping())
  return router
}
