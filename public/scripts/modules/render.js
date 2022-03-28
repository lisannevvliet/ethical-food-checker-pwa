// If there are more pages, show the "More" button.
if (data.page <= (data.count / data.page_size)) {
    $(".more").classList.add("block")
}