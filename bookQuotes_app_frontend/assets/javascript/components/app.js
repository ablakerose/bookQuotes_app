class App {
    constructor() {
        this.books = []
        //above is an empty array. The fetchAndLoadBooks function iterates over json and pushes book objects to. this way, I have access to array of books in other methods by calling "this.books"
        this.bookAdapter = new BooksAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadBooks()
    }

    initBindingsAndEventListeners() {
        this.booksContainer = document.getElementById('books-container')
        this.body = document.querySelector('body')
        this.newBookTitle = document.getElementById('new-book-title')
        this.newBookAuthor = document.getElementById('new-book-author')
        this.newBookQuote = document.getElementById('new-book-quote')
        this.bookForm = document.getElementById('new-book-form')
        this.bookForm.addEventListener('submit', this.createBook.bind(this))
        this.booksContainer.addEventListener('dblclick', this.handleBookClick.bind(this))
        this.booksContainer.addEventListener('focusout', (event) => {
            if (event.target.className === "title editable" || event.target.className === "author editable") {
                this.updateBook(event)
            }
        })
        this.booksContainer = document.getElementById('books-container')
        this.booksContainer.addEventListener('submit', this.handleQuoteFormSubmit.bind(this))
    }
    
    createBook(e) {
        e.preventDefault()
        const title_value = this.newBookTitle.value
        const author_value = this.newBookAuthor.value
        const quote_value = this.newBookQuote.value
        this.bookAdapter.createBook(title_value, author_value, quote_value).then(book => {
            this.books.push(new Book(book) )
            this.newBookTitle.value = ''
            this.newBookAuthor.value = ''
            this.newBookQuote.value = ''
            // above is to clear the textfield input after the new book is pushed to the array
            this.render()
        })
    }

    handleBookClick(e) {
        const htmlTag = e.target
        //(from Michael) make sure the target is an h2 tag (if statement)
        htmlTag.contentEditable = 'true' 
        htmlTag.focus()
        htmlTag.classList.add('editable')
    }
 
    updateBook(e) {
        const htmlTag = e.target
        //console.dir(htmlTag)
        //console.log(e.target.dataset.class)
        //this.books.map(book => book.renderBook())
        htmlTag.contentEditable = 'false' 
        htmlTag.classList.remove('editable')
        const newValue = htmlTag.innerHTML
        const book = {}
        book[htmlTag.className] = newValue
        const id = htmlTag.dataset.id
        this.bookAdapter.updateBook(book, id)
    }
   
    fetchAndLoadBooks() {
        this.bookAdapter
        .getBooks()
        .then(books => {
            books.forEach(book => this.books.push(new Book(book)))
        })
        .then(() => {
            this.render()
        })
    }

    render() {
    this.booksContainer.innerHTML = this.books.map(book => book.renderBook()).join('') 
    } //since this.books is an array, here mapping over each object to append to dom

    // renderQuoteForm(id) {
    //     const quoteForm = document.createElement("form")
    //     quoteForm.setAttribute('data-id', this.id)
    //     quoteForm.innerHTML= `<input type="text" name="quote-text" class="add-quote-text" placeholder="Additional Quote"> <input type="submit" value="save quote">`    
    //     return quoteForm.outerHTML
    // }  

    handleQuoteFormSubmit(e) {
        e.preventDefault()
        const quoteText = e.target.querySelector(".add-quote-text")
       
        const quoteTextValue = quoteText.value
        const bookId = e.target.getAttribute('data-id')  
        
        this.bookAdapter.createBookQuote(quoteTextValue, bookId)
        .then(quoteTextValue => {
            
        const book = this.books.find(book => book.id === quoteTextValue.book.id)
        book.quotes.push(quoteTextValue)
        this.render()
        })
    }
}

