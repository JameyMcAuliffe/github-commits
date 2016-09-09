'use strict'

//const fetch = require('node-fetch')
const cheerio = require('cheerio')
const express = require('express')

//initialize app
const app = express()

//Configure
const port = process.env.PORT || 3000
app.set('port', port)

app.set('view engine', 'pug')

//keeps variable set at run time to render pug file as readable
if(process.env.NODE_ENV !== 'production') {
	app.locals.pretty = true
}


//middlewares
app.use(express.static('public'))

//Routes
app.get('/', (req, res) => {
	res.render('index')
})

app.listen(port, () => {
	console.log(`Listening on port: ${port}`)
})

