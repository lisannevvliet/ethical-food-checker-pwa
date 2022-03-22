import { $ } from "./$.js"

// https://daily-dev-tips.com/posts/detecting-barcodes-from-the-webcam/
export async function detect() {
    // Check if a video object already exists. If so, remove the old video object. 
    if ($('video') != null) {
        $('video').remove()
    }

    // Hide the sort options.
    $(".sort").classList.remove("flex")
    // Clear the results.
    $("ul").innerHTML = ""
    // Hide the "More" button.
    $(".more").classList.remove("block")
    

    // Create a video object and add it to the HTML.
    const video = document.createElement("video")
    video.srcObject = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    video.autoplay = true
    $(".sort").before(video)

    // Search for barcodes within the video object.
    function render() {
        new BarcodeDetector()
            .detect(video)
            .then((barcodes) => {
                barcodes.forEach(barcode => {
                    if ($('video')) {
                        // Change the hash.
                        window.location.hash = barcode.rawValue

                        // Fill the search query with the hash (barcode).
                        $('form input').value = window.location.hash.substring(1)

                        // Remove the video object.
                        $('video').remove()
                    }
                })
            })
            // Catch an error and show it in the console.
            .catch(console.error)
    }

    // Keep searching for barcodes within the video object.
    (function loop() {
        if ($('video')) {
            requestAnimationFrame(loop)
            render()
        }
    })()
}