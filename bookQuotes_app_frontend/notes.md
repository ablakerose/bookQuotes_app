
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

[] The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

[] The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.

[] The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.

[] The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

JavaScript
[ ] Use classes and functions to organize your code into reusable pieces.
[ ] Translate JSON responses into JavaScript model objects using ES6 class or constructor function syntax.
[ ] Use ES6 features when appropriate (e.g. arrow functions, let & const, rest and spread syntax).

Rails
[ ] Follow Rails MVC and RESTful conventions. That means, for example, that a request GET /puppies ought to be handled by the PuppiesController, fetch puppies from the database using a Puppy Active Record model, and return a list of puppies as JSON.
[ ] Well-named variables and methods
[ ] Short, single-purpose methods

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