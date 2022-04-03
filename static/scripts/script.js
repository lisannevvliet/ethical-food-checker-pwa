// Return the Element object of the corresponding element.
function $(element) {
    return document.querySelector(element)
}

// If supported, install the service worker.
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker.register("service-worker.js")
            .then(function(registration) {
                return registration.update()
            })
            .catch(function(error) {
                console.log(error)
            })

        // If the offline page is shown, fill the search bar with the query.
        if ($(".instructions a")) {
            const url = new URL(window.location.href)
            $("form input[type=\"text\"]").value = url.searchParams.get("q")
        }
    })
}

// If the explanation is clicked, show the section.
$("#explanation").addEventListener("click", function() {
    $("section").classList.add("block")
})

// If the explanation is closed, hide the section.
$("section button").addEventListener("click", function() {
    $("section").classList.remove("block")
})