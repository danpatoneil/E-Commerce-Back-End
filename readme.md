# E-Commerce Back-End

## Description
This is a mysql database running on a node.js server that will provide a framework for an E-Commerce business to maintain a database of products in categories and with tags, including stock and price of each item.

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Badges](#badges)
  - [Contribution](#contribution)
  - [Contact Me](#contact)

  ## Installation
  Users will need to install Node.js to run this file, and from there users can use the npm i command to install any other required dependencies. Users will also need mysql installed, as seeding the database with mysql is required.

  ## Usage
  This project is used to manage an E-Commerce database, with users being able to send CRUD requests through a tool like insomnia to update the database through HTTP requests. Users can start the database using mysql and entering

  ```
    source db/schema.sql
  ```
  and from there they can use the npm scripts for installs, seed, and start that can be seen in the package.json. From there, users can send HTML requests to the database to do standard CRUD transformations to the products, tags, and categories databases. A walkthrough video of how to start a server and an example of what commands are possible can be [viewed here](https://drive.google.com/file/d/1qkgx92DyAI3uVpIqbgwMbQL2MBzisLXX/view)


  ## Badges
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## How to Contribute
  Users interested in contributing should feel free to make forks of this project. An obvious place for improvement is that the products and tags tables have a many-many relationship and thus a table which they are related through. In my current implementation there is no way to use HTTP commands to add or remove records to this table and thus no way to connect products to tags.

  ## Contact
  My github is [danaptoneil](https://github.com/danaptoneil)

   My email is is danpatoneil@gmail.com

  ## License
  This project is published under the [MIT](https://opensource.org/licenses/MIT) license
