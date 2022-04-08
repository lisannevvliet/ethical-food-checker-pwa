# Ethical Food Checker PWA

## Table of contents
- [Live demo](#live-demo)
- [Description](#description)
- [Concept](#concept)
- [Installation](#installation)
- [Features](#features)
- [Activity diagram](#activity-diagram)
- [Client- server rendering](#client-server-rendering)
- [Data life cycle](#data-life-cycle)
- [Real-time events](#real-time-events)
- [External API](#external-api)
- [Enhancements](#enhancements)

## Live demo
https://ethical-food-checker-pwa.herokuapp.com/

## Description
The Ethical Food Checker is designed to help consumers make more responsible choices in the supermarket. By typing in the name or barcode of a product, the user can find out in less than a minute whether the product is vegetarian or vegan, if it contains palm oil, and what its Eco-Score is. The website uses the Open Food Facts API and shows worldwide products, to ensure that the user finds the right product.

## Concept
*Maak een sectie aan over het concept.*

## Installation
To view, visit the [Heroku app](https://ethical-food-checker-pwa.herokuapp.com/). To make local modifications, clone the repository and edit the files in an IDE.

## Features
*Maak ook een visuele lijst van alle features die je app heeft (Search, pagination, etc.) Hier mag je een beetje flexen. Zet hierbij welke data wordt opgehaald, opgeslagen of wordt verwerkt.*

## Activity diagram
*An activity diagram including the Service Worker.*

## Client- server rendering
*An explanation of client- server rendering.*

## Data life cycle
*Maak een sectie aan over de data life cycle.*

## Real-time events
*Maak een sectie aan over real-time events.*

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
*A list of enhancements to optimize the critical render path implemented your app.*
