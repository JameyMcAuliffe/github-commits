'use strict'

//const fetch = require('node-fetch')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const port = process.env.PORT || 3000
app.set('port', port)


//middlewares
app.use(express.static('public'))

//Routes
app.get('/', (req, res) => {
	res.send('<h1>Hello hello</h1>')
})

app.listen(port, () => {
	console.log(`Listening on port: ${port}`)
})

