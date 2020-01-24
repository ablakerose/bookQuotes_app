class App {
    constructor() {
        this.books = []
        //above is an empty array. The fetchAndLoadBooks function iterates over json and pushes book objects to. this way, I have access to array of books in other methods by calling "this.books"
        this.adapter = new BooksAdapter()
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
        //whenever the bookForm is submitted, the createBook function loads. 
        this.booksContainer.addEventListener('dblclick', this.handleBookClick.bind(this))
        this.booksContainer.addEventListener('blur', () => {
            if (event.target.className === "title" || event.target.className === "author") {
                this.updateBook.bind(this), true
            }
        })
        this.booksContainer.addEventListener('submit', this.handleQuoteFormSubmit)
    }

handleQuoteFormSubmit(e){
    e.preventDefault()
    debugger
    console.log(e.target)
    //get quote text and id from e.target
    //pass both into createBookQuote
    // .then() rerender so we see the new quote

    //  const id = htmlTag.dataset.id


}
//here we are using the information form the event(e). take the value of our variable newBookTitle which is the value of the "id" in the html DOM. 
    
createBook(e){
        e.preventDefault()
        const title_value = this.newBookTitle.value
        const author_value = this.newBookAuthor.value
        const quote_value = this.newBookQuote.value
        this.adapter.createBook(title_value, author_value, quote_value).then(book => {
           console.log(book)
            this.books.push(new Book(book))
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
        htmlTag.contentEditable = 'false' 
        htmlTag.classList.remove('editable')
        const newValue = htmlTag.innerHTML
        const book = {}
        book[htmlTag.className] = newValue
        const id = htmlTag.dataset.id
        this.adapter.updateBook(book, id)
        //.then()
        //.catch(err => if err warn the user by upadting the dom)
        //consider my fetch call failing. (here if the fetch call fails, the dom is still changed. you think it's updated, but user would have no idea that the fetch failed. no immediate indication that those edits were failing.)
        //good opportunity to use the .catch for errors
    }


//add updateQuote function, might have to change how i handle event listeners


    fetchAndLoadBooks() {
        this.adapter
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
    }
    //since this.books is an array, here mapping over each object to append to dom
    //here is where I should decide what KIND of dom element I want to append the book elements to
    //maybe a table. Michael suggested just doing an innerTEXT instead of inner HTML too.

}

