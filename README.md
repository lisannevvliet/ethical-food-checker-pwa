# Ethical Food Checker PWA

## Table of contents
- [Live demo](#live-demo)
- [Product description](#product-description)
- [Install notes](#install-notes)
- [External API](#external-api)

## Live demo
https://ethical-food-checker-pwa.herokuapp.com/

## Product description
The Ethical Food Checker is designed to help consumers make more responsible choices in the supermarket. By typing in the name or barcode of a product, the user can find out in less than a minute whether the product is vegetarian or vegan, if it contains palm oil, and what its Eco-Score is. The website uses the Open Food Facts API and shows worldwide products, to ensure that the user finds the right product.

## Install notes
To view, visit the [Heroku app](https://ethical-food-checker-pwa.herokuapp.com/). To make local modifications, clone the repository and edit the files in an IDE.

## External API
The external API that is featured in this project is the [Open Food Facts API](https://openfoodfacts.github.io/api-documentation/). From this API, the following properties are used:
- code (for barcodes)
- search_terms (for product names)
- page
- product_name
- image_small_url
- ingredients_text
- ingredients_analysis_tags (for vegetarian, vegan and palm oil information)
- ecoscore_grade
