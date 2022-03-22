// Load Node.js modules.
import express from 'express'
import fetch from 'node-fetch'

// Get the products from the API.
const response = await fetch('https://world.openfoodfacts.org/cgi/search.pl?search_terms=melk&search_simple=1&action=process&json=1&page=1')
const data = await response.json()

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
app.get('/', function (_req, res) {
    res.render('index', { products: data.products })
})