class Book {
    constructor(bookJSON){
        this.id = bookJSON.id
        this.title = bookJSON.title
        this.author = bookJSON.author
        this.quotes= bookJSON.quotes
        this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners() {
        this.quoteForm = document.getElementById('add-quote-form')
        this.quoteForm.addEventListener('submit', this.renderNewQuoteForm.bind(this))
        // this.booksContainer.addEventListener('dblclick', this.handleBookClick.bind(this))
        // this.booksContainer.addEventListener('blur', this.updateBook.bind(this), true)
    }

    renderNewQuoteForm(e){
        e.preventDefault()
        console.log('new quote is being added')
        //return HTML for new quote form
        // return `
        // <form>
        // `
    }

    //create form on index.html
    //create event listener to submit that form in renderNewQuoteForm
    //separate function for attaching event listener to the form (this will take in the bookId and it will pass that id along to the )
    //have its own initbinidngs, so that it can be called after i've added new books 
    
    renderBook() {
        return `<div class="book-container" id="book-${this.id}">
                <h2 data-id=${this.id} class="title">${this.title}</h2>
                <h2 data-id=${this.id} class="author"> by ${this.author} </h2>
                <ul> ${this.quotes ? this.getQuotes() : "No quotes recorded yet"}</ul>
                </div>`

        }
        //${renderNewQuoteForm()} -- should eventually go inside renderBook()
        
        //the ternary function above should work that if there are quotes in the input field, the this.getQuotes() function runs. Otherwise, it says the string. BUT now it always defaults to the string.
    
    // renderNewQuoteButton() {

        //to add a quote to an existing book, render a form that includes the id of the book 
        // 

    getQuotes() {
        return this.quotes.map(quote => `<li>${quote.quote_text}</li>`).join('')
    }

}











