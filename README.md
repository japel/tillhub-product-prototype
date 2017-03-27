# tillhub-product-prototype

A sample Sails and Angular 2 product prototype

To run this you will need typescript compiler and npm/node installed and setup.

## Steps
`npm install typescript -g`

`npm install typings -g`

`npm install`

`typings install`

`tsc`

`npm start`

browse to `http://localhost:1337`

## Database Setup
It is not necessary to setup a database, this prototype uses a "localDiskDb". (./.tmp/localDiskDb.db)
But if you want to test this with a "real" database configure your connection at ./config/connections.js and change the connection attribute value at ./config/models.js to the name of your previously configured connection.

## Relevant files
Frontend code is located at ./assets/app

### Backend code:
Backend code is almost non existent, as Sails.js provides automatic [blueprints](https://github.com/balderdashy/sails/tree/master/lib/hooks/blueprints/actions) for CRUD (which this prototype utilizes).

But if you feel curious you can uncomment ./api/controllers/ProductController.js and restart the server to see my code in action.

Backend Validation is done by waterline (Sails default ORM) and the validation rules are in the model: ./api/models/Product.js

./config/bootstrap.js takes care of adding 5 dummy products while starting the server. The database is cleared on every server start, if this is not wanted, change the migrate attribute value at ./config/models.js to 'alter'

## Additional information
`sails lift` starts grunt which copies the transpiled ES5 code to ./.tmp/public/

## Some curl for testing:

### get products:
curl -XGET 'localhost:1337/api/product'
### get products sorted by currency ascending:
curl -XGET 'localhost:1337/api/product?sort=currency%20ASC'
### get products sorted by price descending:
curl -XGET 'localhost:1337/api/product?sort=price%20DESC'
### get products sorted by name ascending:
curl -XGET 'localhost:1337/api/product?sort=name%20ASC'
### get products with names that start with 'G':
curl -G -XGET 'localhost:1337/api/product' --data-urlencode 'where={"name":{"startsWith":"G"}}'
### get products with price > 30000:
curl -G -XGET 'localhost:1337/api/product' --data-urlencode 'where={"price":{">":"30000"}}'
### get product with id 1:
curl -XGET 'localhost:1337/api/product/1'

...