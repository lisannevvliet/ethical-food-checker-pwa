import { $ } from "./$.js"
import { url } from "./url.js"
import { render } from "./render.js"

// Counter for the page number.
let page = 1

export function get(first, sort_by, hash) {
    // Hide the text, "More" button and show the loader upon searching.
    $(".instructions").classList.add("none")
    $(".more").classList.remove("block")
    $(".loader").classList.add("block")

    // Trace whether the first page should be loaded.
    if (first) {
        // Clear the results.
        $("ul").innerHTML = ""
        page = 1
    } else {
        page++
    }

    // Send a search request to the API.
    fetch(url(page, sort_by, hash))
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            render(data, first)
        })
}