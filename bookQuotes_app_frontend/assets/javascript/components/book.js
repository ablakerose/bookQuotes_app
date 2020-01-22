class Book {
    constructor(bookJSON){
        this.id = bookJSON.id
        this.title = bookJSON.title
        this.author = bookJSON.author
        this.quotes= bookJSON.quotes
    }
    
    renderBook() {
        return `<div data-bookID=${this.id} class="book-container" id="book-${this.id}">
                    <h2 >${this.title}, ${this.author}</h2> 
                    <ul>${this.getQuotes()}</ul>
                </div>`
    }

    getQuotes() {
        return this.quotes.map(quote => `<li>${quote.quote_text}</li>`).join('')
    }

}

//get everything rendered
//creating a book
//creating a quote for a book
//think about utilizing nested routes for creating a quote that's associated with a book.
//clicking on button, calls a function (use app.js). Add a quote, that button would render a form and that form would point to a nested URL associated to that specific book. 
//when get books back from database, instantiate them with their ID. Get an ID from the database, that will let me render a form to change dynamically that action. TO point to books/1/quotes/2