#BBC iPlayer Codetes
## What it is?
Is a Node/Express app which use the BBC API to: 

* List programme titles and images.
* Paginate through a letter when has more than 20 results.
* Navigate to other letter.

## How to install

* Clone this repo 

	`git clone git@github.com:pataruco/bbc-api.git`

* Get inside `bbc-api` directory in your machine 
 
 	`cd bbc-api`
* Then install dependecies
 	
 	`npm install`

## How to run the program
Once it is installed in your machine and inside the `bbc-api` run

`npm start`

Open a browser tab and go to

`localhost:3000`
## How to run tests
To run tests you need to have the server running on `localhost:3000`

In your terminal open a tab and run

`npm start`

Open another tab in your terminal and run

`npm test`

## Where I struggled
Writing test in Mocha/Chai

## Fun Parts
Building the `LetterList` model

## Libraries used
* Node.
* Express.
* Sass.
* Mocha
* Chai.
* Request.
* EJS.