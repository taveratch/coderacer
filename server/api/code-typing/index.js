let express = require('express')
let read = require('read-file')
module.exports = () => {
	let router = express.Router()
	router.get('/code', (req, res) => {
		let data = read.sync(__dirname + '/code-file/todo-action.txt', {
			encoding: 'utf8'
		})
		res.send(data)
	})
  return router
}
