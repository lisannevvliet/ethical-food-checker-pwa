// Load Node.js modules.
import express from 'express'
import fetch from 'node-fetch'

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
app.get('/', async function (_req, res) {
    res.render('index', { query: "" })
})

app.get('/search', async function (req, res) {
    // Get the products from the API.
    const response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${req.query.q}&search_simple=1&action=process&json=1&page=1`)
    const data = await response.json()

    if (data.products == 0) {
        res.render('error', { query: req.query.q })
    } else {
        res.render('index', { query: req.query.q, products: data.products })
    }
})