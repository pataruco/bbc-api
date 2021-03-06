#BBC iPlayer programmes index

##What is it?

Is a Node/Express app that uses the BBC API to:

* List programme titles and images
* Paginate through alphabet letters and numbers when there are more than 20 results
* Navigate to another letter

##How to install

Clone this repo

`git clone git@github.com:pataruco/bbc-api.git`

Go to `bbc-api` directory in your machine

`cd bbc-api`

Then install dependencies

`npm install --save`

##How to run the program

Once it is installed in your machine and in the `bbc-api` directory, run

`npm start`

Open a browser tab and go to

`localhost:3000`

##How to run tests

To run tests you need to have the server running on `localhost:3000`

If it is not running, got to your terminal, open a tab, get into `bbc-api` directory and run

`npm start`

Open another tab in your terminal, get into `bbc-api` directory and run

`npm test`

##Where I struggled

Writing test in Mocha/Chai

##Fun Parts

Building the LetterList model

##Libraries used

* Node
* Express
* Sass
* Mocha
* Chai
* Request
* EJS
