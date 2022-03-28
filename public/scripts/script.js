// Return the Element object of the corresponding element.
function $(element) {
    return document.querySelector(element)
}

// If the explanation is clicked, show the section.
$("#explanation").addEventListener("click", function() {
    $("section").classList.add("block")
})

// If the explanation is closed, hide the section.
$("section button").addEventListener("click", function() {
    $("section").classList.remove("block")
})

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/scripts/service-worker.js')
            .then(function(registration) {
                console.log("fiets")
                return registration.update()
            })
            .catch(function(err) {
                console.log(err)
            })
    })
}