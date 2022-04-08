# Ethical Food Checker PWA

## Table of contents
- [Live demo](#live-demo)
- [Description and concept](#description-and-concept)
- [Installation](#installation)
- [Features](#features)
- [Activity diagram](#activity-diagram)
- [Client- server rendering](#client-server-rendering)
- [Data life cycle](#data-life-cycle)
- [External API](#external-api)
- [Enhancements](#enhancements)

## Live demo
https://ethical-food-checker-pwa.herokuapp.com/

## Description and concept
The Ethical Food Checker is designed to help consumers make more responsible choices in the supermarket. By typing in the name or barcode of a product, the user can find out in less than a minute whether the product is vegetarian or vegan, if it contains palm oil, and what its Eco-Score is. The website uses the Open Food Facts API and shows worldwide products, to ensure that the user finds the right product.

## Installation
To view, visit the [Heroku app](https://ethical-food-checker-pwa.herokuapp.com/). To make local modifications, clone the repository and edit the files in an IDE.

## Features
*Maak ook een visuele lijst van alle features die je app heeft (Search, pagination, etc.) Hier mag je een beetje flexen. Zet hierbij welke data wordt opgehaald, opgeslagen of wordt verwerkt.*
- Search
- Pagination

## Activity diagram
*An activity diagram including the Service Worker.*

## Client- server rendering
*An explanation of client- server rendering.*
Instead of fetching the products in the client-side JavaScript, the API call is being made server-side, using the node-fetch Node.js module. If the API returns products, load results.ejs and pass through the search query, received products, page and amount of pages in total. These parameters are then used in the HTML. If the API does not return products, load error.ejs and pass through the search query and type (name or barcode). The client-side JavaScript only consists of the service worker and the functionality of the "Explanation" button. If the service worker is installed and the user has no internet, offline.ejs is displayed and the search query is filled-in with client-side JavaScript.

## Data life cycle
*Maak een sectie aan over de data life cycle.*

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

## Enhancements
- [x] Automatically minified CSS and JavaScript on npm start.
- [x] Set HTTP header field Cache-control to cache non-HTML GET requests for 1 year.
- [x] Added revisioning to service worker by storing the version number in a variable.
- [x] Implemented compression using the corresponding Node.js module.
- [x] Wrote as little client-side JavaScript as possible.
- [x] Added font-display: swap to imported fonts in CSS.
- [x] Verified that API images are not unnecessary big.
- [x] Compressed background.jpg from 2 MB to 197 kB.
- [x] Changed text in button from white to black to improve accessibility.
- [x] Added language tag to HTML to improve accessibility.
- [x] Added description meta tag to HTML to improve SEO.
- [x] Removed unused images, CSS and JavaScript.
