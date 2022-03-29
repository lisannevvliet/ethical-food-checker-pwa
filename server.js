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
app.get('/', function (_req, res) {
    res.render('index')
})

app.get('/search', async function (req, res) {
    // Boolean which shows if the search query is a barcode.
    const barcode = /^\d+$/.test(req.query.q)

    // Save the correct URL based on if the search query is a barcode or not.
    const url = barcode ? `https://world.openfoodfacts.org/cgi/search.pl?code=${req.query.q}&search_simple=1&action=process&json=1&page=1`
    : `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${req.query.q}&search_simple=1&action=process&json=1&page=1`

    // Get the products from the API.
    const response = await fetch(url)
    const data = await response.json()

    if (data.products == 0) {
        // Assign a name to the search query type.
        const type = barcode ? 'barcode' : 'name'
        res.render('error', { query: req.query.q, type: type })
    } else {
        // Determine if there are more pages.
        const more = (data.page <= (data.count / data.page_size)) ? true : false
        res.render('results', { query: req.query.q, products: data.products, more: more })
    }
})

app.get('/offline', function (_req, res) {
    res.render('offline')
})