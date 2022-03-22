export function barcode(hash) {
    // Boolean which shows if the search query is a barcode.
    return /^\d+$/.test(hash)
}