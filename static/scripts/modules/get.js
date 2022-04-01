// Counter for the page number.
let page = 1

// Trace whether the first page should be loaded.
if (first) {
    // Clear the results.
    $("ul").innerHTML = ""
    page = 1
} else {
    page++
}