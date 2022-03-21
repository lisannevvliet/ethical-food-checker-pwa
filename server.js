// Load Express.
var express = require('express')

// Initialise Express.
var app = express()

// Render static files.
app.use(express.static('public'))

// Set the view engine to EJS.
app.set('view engine', 'ejs')

// Set the port the website will run on.
app.listen(8080)

// *** GET Routes - display pages. ***
// Root Route.
app.get('/', function (req, res) {
    res.render('pages/index')
})