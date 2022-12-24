# Neas Fashion

This is the part of Neas Fashion that customers see. It allows users to place orders through whatsapp, view details about products, and see all the products in the NF database sorted by their categories.

It is deployed @ [neas_fashion_site](https://neasfashion.demo.joshytheprogrammer.com)

## Jumbotron

This component contains a simple banner AD image. It is dynamic and can be easily edited from the admin section of the site.
It is also three different banners, the main banner and two side banners. It is surrounded by an overflow that allows users to scroll.

## Trending Categories

Lists all the categories from the NF database. It is also surrounded by overflow to allow it flex in a row infinitely.

## New Arrivals

Fetches products based on the date they were added and lists them in a grided manner.

## Categories Fetcher

The most impressive feature in my humble opinion. It takes a list of all the categories in the NF DB and creates sections based on these categories with a unique id of the category ID. After these categories have been created, it fetches and displays all the products associated with the category.
