# Ethical Food Checker

## Table of contents
- [Live demo](#live-demo)
- [Description](#description)
- [Poster](#poster)
- [Installation](#installation)
- [User manual and features](#user-manual-and-features)
- [Activity diagram](#activity-diagram)
- [External data source](#external-data-source)
- [Checklist](#checklist)

## Live demo
[https://lisannevvliet.github.io/ethical-food-checker/](https://lisannevvliet.github.io/ethical-food-checker/)

## Description
The Ethical Food Checker is designed to help consumers make more responsible choices in the supermarket. By scanning the barcode of a product or typing in the product name, the user can find out in less than a minute whether the product is vegetarian or vegan, if it contains palm oil, and what its Eco-Score is. The website uses the Open Food Facts API and shows worldwide products, to ensure that the user finds the right product.

## Poster
![](https://user-images.githubusercontent.com/90243819/157631107-88be7783-f74d-49e4-a444-572a6f04c55f.png)

## Installation
To view, visit the [GitHub Pages site](https://lisannevvliet.github.io/ethical-food-checker/). To make local modifications, clone the repository and edit the files in an IDE.

## User manual and features
To use the Ethical Food Checker, simply enter the name or barcode of a product and click "Search." It is also possible to scan a barcode using the camera in Google Chrome and Microsoft Edge. Upon searching, a list of matching products will be displayed, as well as the corresponding labels. The meaning of the labels can be found by moving the cursor over the labels, or by clicking on "Explanation" in the lower left corner of the screen. Besides the product names and labels, pictures and ingredients can also be found in this overview. Lastly, there is an option to sort the results by popularity, product name, date added and date edited.

## Activity diagram
![](https://user-images.githubusercontent.com/90243819/158375976-4f31f2de-691d-4706-a341-8fe8b6a47360.jpg)

## External data source
The external data source that is featured in this project is the [Open Food Facts API](https://openfoodfacts.github.io/api-documentation/). From this API, the following properties are used:
- code (for barcodes)
- search_terms (for product names)
- page
- sort_by
- product_name
- image_small_url
- ingredients_text
- ingredients_analysis_tags (for vegetarian, vegan and palm oil information)
- ecoscore_grade

## Checklist
The completed tasks can be found in the [commit messages](https://github.com/lisannevvliet/ethical-food-checker/commits/main). The following tasks could not be completed in the set time frame, but would be nice to have.

- [ ] Vegetarian, vegan, palm oil free and Eco-Score filters.
- [ ] Only fetch results sold in specific countries, with the ability to choose the country.
- [ ] Expand the picture when clicked in higher quality.
- [ ] Auto-reload new products at the bottom of the page.
- [ ] Keep the product name in place when expanding a lot of ingredients.
- [ ] Remember the sort options when reloading the page, by storing it in the hash.
