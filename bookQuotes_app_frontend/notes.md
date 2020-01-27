
MY CURRENT SCHEMA 17 jan 2020

Book
has_many :quotes
title
author

Quote
belongs_to :book
quote_text

*random quote
Get request: button to return a random quote
- have some logic on backend to generate random quote

___________________
IF I HAD A USER: 
MODELS

User
:has_many books
:has_many quotes through books
username
email
password

Book
:has_many quotes
:belongs_to user
title
author

Quote
:belongs_to Book
:belongs_to User
quote_text

would need User.quotes.books to access all the user's books.

implement differet fetch to a different nested route to generate a quote for a existing specific book. 

as i'm beginning, start with JUST the log-in process (not open to the pbulic to just create an account).. and me as the admin would be creating those accounts. 

_____________________
MINIMUM VIABLE PRODUCT

[x] The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

[x] The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.

[x] The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.

The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 
   [ ] 3 AJAX calls, covering at least 
   [ ] 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

JavaScript
[ ] Use classes and functions to organize your code into reusable pieces.
[x] Translate JSON responses into JavaScript model objects using ES6 class or constructor function syntax.
[x] Use ES6 features when appropriate (e.g. arrow functions, let & const, rest and spread syntax).

Rails
[x] Follow Rails MVC and RESTful conventions. That means, for example, that a request GET /puppies ought to be handled by the PuppiesController, fetch puppies from the database using a Puppy Active Record model, and return a list of puppies as JSON.
[x] Well-named variables and methods
[x] Short, single-purpose methods

Git
[ ] Aim for a large number of small commits - commit frequently!
[ ] Add meaningful messages to your commits. When you look back at your commits with git log, the messages should describe each change.
[ ] Don't include changes in a commit that aren't related to the commit message

______________________
During your project review, be prepared to:

Explain your code from execution point to exit point. Use the best technical vocabulary you can.
Live code. This could be refactoring, adding a new feature, or both.
Answer questions about your knowledge of JavaScript Fundamentals.
In particular, the JavaScript Fundamentals concepts your reviewer may ask about include:

variables
data structures
functions
*hoisting*
*scope*
context
this
closures
ES6 syntax
let, const
arrow functions
Learning Goals
These are the skills and knowledge that you should aim to demonstrate through the project review.

Explain how Rails routes a request to a controller and method based on the URL and HTTP verb
Use render json: to render serialized JSON
Select, Create, and Modify DOM nodes
Attach listeners to DOM nodes to respond to user interaction
Use preventDefault to control form submit behavior
Use fetch with 'GET', 'POST', 'PATCH' & 'DELETE' HTTP methods
Create a JavaScript object with ES6 class syntax
Instantiate JavaScript objects and call methods on them.


If I get notice "port in use" 
Run
lsof -i :3000
// this shows process id of whatever is running on that port 
kill -9 1720
// run that with whatever port is running

___________________
   // this.booksContainer.addEventListener('blur', () => {
        //     if (event.target.className === "title" || event.target.className === "author") {
        //         this.updateBook.bind(this), true
        //     }
        // })

____________________

notes under handleQuoteFormSubmit()
//const formTag = e.target
        //console.log(getQuoteFormValue)
        
        //const book = {}
        //const quote_value = this.book.quoteForm.value
        //const bookId = formTag.dataset.id
        //this.adapter.createBookQuote(quote_value, bookId) 
        

        // const htmlTag = e.target
        // const newValue = htmlTag.innerHTML
        // const book = {}
        // book[htmlTag.className] = newValue
        // const id = htmlTag.dataset.id
        // this.adapter.updateBook(book, id)

        //const title_value = this.newBookTitle.value

        //get quote text and id from e.target
        //pass both into createBookQuote
        // .then() rerender so we see the new quote

        //const id = htmlTag.dataset.id

    // to get the value of the change in the form element: document.getElementById("whatever") -- get the value of that
    // to get the id, i need to use the dataset attribute like before and then get it from e.target.
    }
    //here we are using the information form the event(e). take the value of our variable newBookTitle which is the value of the "id" in the html DOM. 

    ___________________

    // .then(function(book) {
        //     console.log(book);
        //     })
        //     .catch(function(error) {
        //       alert("Bad things! Ragnarők!");
        //       console.log(error.message);
        //     });

        //.then()
        //.catch(err => if err warn the user by upadting the dom)
        //consider my fetch call failing. (here if the fetch call fails, the dom is still changed. you think it's updated, but user would have no idea that the fetch failed. no immediate indication that those edits were failing.)
        //good opportunity to use the .catch for errors
    }

    // fetch("http://localhost:3000/dogs", configObj)
    // .then(function(response) {
    //   return response.json();
    // })
    // 
    //.then(function(object) {
    //   console.log(object);
    // })
    // .catch(function(error) {
    //   alert("Bad things! Ragnarők!");
    //   console.log(error.message);
    // });