// Import Express.
import express from "express"
// Import node-fetch.
import fetch from "node-fetch"
// Import compression.
import compression from "compression"

// Initialise Express.
const app = express()

// Disable ETags to change the HTTP response status codes.
// app.disable("etag")

// Compress all responses.
app.use(compression())

// Cache non-HTML GET requests for 1 year (see https://ashton.codes/set-cache-control-max-age-1-year/).
app.use(function(req, res, next) {
    if (req.method == "GET" && !(req.rawHeaders.toString().includes("text/html"))) {
        res.set("Cache-control", "public, max-age=31536000")
    }

    // Pass on the request.
    next()
})

// Render static files.
app.use(express.static("static"))

// Set the view engine to EJS.
app.set("view engine", "ejs")

// Set and log the port for Express.
app.listen(8080, () => { console.log("Express running at http://localhost:8080/.") })

// Listen to all GET requests on /.
app.get("/", function (_req, res) {
    res.render("index")
})

// Listen to all GET requests on /search.
app.get("/search", async function (req, res) {
    // Boolean which shows if the search query is a barcode.
    const barcode = /^\d+$/.test(req.query.q)

    // Save the correct URL based on if the search query is a barcode or not.
    const url = barcode ? `https://world.openfoodfacts.org/cgi/search.pl?code=${req.query.q}&search_simple=1&action=process&json=1&page=${req.query.p}`
    : `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${req.query.q}&search_simple=1&action=process&json=1&page=${req.query.p}`

    // Get the products from the API.
    const response = await fetch(url)
    const data = await response.json()

    if (data.products == 0) {
        // Assign a name to the search query type.
        const type = barcode ? "barcode" : "name"
        res.render("error", { query: req.query.q, type: type })
    } else {
        res.render("results", { query: req.query.q, products: data.products, page: data.page, pages: Math.ceil(data.count / data.page_size) })
    }
})

// Listen to all GET requests on /offline.
app.get("/offline", function (_req, res) {
    res.render("offline")
})