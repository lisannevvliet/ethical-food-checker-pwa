// If there is a sort method and it is not the default one, add this to the url.
if (sort_by != "" && sort_by != "unique_scans_n") { url += `&sort_by=${sort_by}` }