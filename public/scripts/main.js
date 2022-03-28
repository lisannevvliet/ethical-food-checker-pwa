import { $ } from "./modules/$.js"
import { get } from "./modules/get.js"
import { detect } from "./modules/detect.js"
import "./modules/vendor/routie.min.js"

// Get the products from the API when the hash changes.
routie ({
    ":hash": hash => {
        get(true, "", hash)

        // Fill the search query with the hash (name or barcode).
        $('form input').value = window.location.hash.substring(1)
    }
})

// Only show the barcode button if the BarcodeDetector is supported.
if ("BarcodeDetector" in window) {
    $(".barcode").classList.add("block")
}

// Show the camera upon clicking the barcode button.
$(".barcode").addEventListener("click", function() {
    detect()
})

// Close the keyboard after submit.
document.activeElement.blur()

// EventListeners for sort options.
$(".popularity").addEventListener("click", function() {
    $(".popularity").classList.remove("lightgreen")
    $(".product_name").classList.remove("darkgreen")
    $(".add_date").classList.remove("darkgreen")
    $(".edit_date").classList.remove("darkgreen")

    get(true, "unique_scans_n", $("input").value)
})

$(".product_name").addEventListener("click", function() {
    $(".popularity").classList.add("lightgreen")
    $(".product_name").classList.add("darkgreen")
    $(".add_date").classList.remove("darkgreen")
    $(".edit_date").classList.remove("darkgreen")

    get(true, "product_name", $("input").value)
})

$(".add_date").addEventListener("click", function() {
    $(".popularity").classList.add("lightgreen")
    $(".product_name").classList.remove("darkgreen")
    $(".add_date").classList.add("darkgreen")
    $(".edit_date").classList.remove("darkgreen")

    get(true, "created_t", $("input").value)
})

$(".edit_date").addEventListener("click", function() {
    $(".popularity").classList.add("lightgreen")
    $(".product_name").classList.remove("darkgreen")
    $(".add_date").classList.remove("darkgreen")
    $(".edit_date").classList.add("darkgreen")

    get(true, "last_modified_t", $("input").value)
})

$(".more").addEventListener("click", function() {
    get(false, "", $("input").value)
})