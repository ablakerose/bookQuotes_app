class Book {
    constructor(bookJSON){
        this.id = bookJSON.id
        this.title = bookJSON.title
        this.author = bookJSON.author
        this.quotes= bookJSON.quotes 
    }

    initBindingsAndEventListeners() {
        this.quoteForm = document.getElementById('books-container') 
        this.quoteForm.addEventListener('submit', handleQuoteFormSubmit)
        // this.booksContainer.addEventListener('dblclick', this.handleBookClick.bind(this))
        // this.booksContainer.addEventListener('blur', this.updateBook.bind(this), true)
    }

  

    // renderQuoteFormTest() {
    //     return `<form id="add-quote-form">
    //     <input type="text" name="quote-text" id="add-quote-text" placeholder="Additional Quote">
    //     <input type="submit" value="save quote">      
    //     </form>`
    // }
    
    renderQuoteForm(id) {
        const quoteForm = document.createElement("form")
        //figure out how to add a data attribute instead
        quoteForm.id = `book_id_${id}`
        quoteForm.innerHTML= '<input type="text" name="quote-text" id="add-quote-text" placeholder="Additional Quote"> <input type="submit" value="save quote">'     
        return quoteForm.outerHTML
    }
//data-book-id=1

    renderBook() {
        return `<div class="book-container" id="book-${this.id}">
                <h2 data-id=${this.id} class="title">${this.title}</h2>
                <h2 data-id=${this.id} class="author"> by ${this.author} </h2>
                <ul> ${this.quotes ? this.getQuotes() : "No quotes recorded yet"}</ul>    
                ${this.renderQuoteForm(this.id)}   
                </div>`
        }

        //${renderNewQuoteForm()} -- should eventually go inside renderBook()
       
        // return `<form id="add-quote-form">
        // <input type="text" name="quote-text" id="add-quote-text" placeholder="Additional Quote">
        // <input type="submit" value="save quote">      
        // </form>`

      //IF ABOVE DOESN'T WORK
        //create a form element
            //attach event listener to a form element

            //onsubmit="handleQuoteFormSubmit()


    // renderNewQuoteButton() {

        //to add a quote to an existing book, render a form that includes the id of the book 
        // 

    getQuotes() {
        return this.quotes.map(quote => `<li>${quote.quote_text}</li>`).join('')
    }

}











