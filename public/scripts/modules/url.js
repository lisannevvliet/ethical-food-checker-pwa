import { barcode } from "./barcode.js"

export function url(page, sort_by, hash) {
    // Save the correct URL based on if the search query is a barcode or not.
    let url =  barcode(hash)
    ? `https://world.openfoodfacts.org/cgi/search.pl?code=${hash}&search_simple=1&action=process&json=1&page=${page}`
    : `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${hash}&search_simple=1&action=process&json=1&page=${page}`

    // If there is a sort method and it is not the default one, add this to the url.
    if (sort_by != "" && sort_by != "unique_scans_n") { url += `&sort_by=${sort_by}` }
    
    return url
}