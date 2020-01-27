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
            //event target, maybe add class name. does event target have class name new event form.
        this.body = document.querySelector('body')
        this.newBookTitle = document.getElementById('new-book-title')
        this.newBookAuthor = document.getElementById('new-book-author')
        this.newBookQuote = document.getElementById('new-book-quote')
        this.bookForm = document.getElementById('new-book-form')
        this.bookForm.addEventListener('submit', this.createBook.bind(this))
        //whenever the bookForm is submitted, the createBook function loads. 
        this.booksContainer.addEventListener('dblclick', this.handleBookClick.bind(this))
        //this.booksContainer.addEventListener('focusout', this.updateBook.bind(this))
        // this.booksContainer.addEventListener('focusout', () => {
        //     if (className === "title editable" || className === "author editable") {
        //         this.updateBook.bind(this)
        //     }
        // })
        this.booksContainer = document.getElementById('books-container')
        this.booksContainer.addEventListener('submit', this.handleQuoteFormSubmit.bind(this))
    }


    // () => {
    //     if (event.target.className === "title" || event.target.className === "author") {
    //         this.handleBookClick.bind(this)

    // this.booksContainer.addEventListener('blur', () => {
    //     if (event.target.className === "title" || event.target.className === "author") {
    //         this.updateBook.bind(this), true
    //     }

    
    createBook(e) {
        e.preventDefault()
        const title_value = this.newBookTitle.value
        const author_value = this.newBookAuthor.value
        const quote_value = this.newBookQuote.value
        this.adapter.createBook(title_value, author_value, quote_value).then(book => {
          
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
        
        htmlTag.contentEditable = 'false' 
        htmlTag.classList.remove('editable')
        const newValue = htmlTag.innerHTML
        const book = {}
        book[htmlTag.className] = newValue
        const id = htmlTag.dataset.id
        this.adapter.updateBook(book, id)
    }
   


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
    } //since this.books is an array, here mapping over each object to append to dom

    renderQuoteForm(id) {
        const quoteForm = document.createElement("form")
        quoteForm.id = `book_id_${id}`
        
        quoteForm.innerHTML= `<input type="text" data-id=${this.id} name="quote-text" id="add-quote-text" placeholder="Additional Quote"> <input type="submit" value="save quote">`    
        return quoteForm.outerHTML
    }  

    handleQuoteFormSubmit(e) {
        e.preventDefault()
        console.log(event.target)    
        //queryselector , input = .value
        //grab id of book itself  using an attribute on the form itself. // use data dash getAttribute to read the value of the attribute.      
    }

    // return the ID of the first form object that has the right type of ID
    //     function findFirstBookFormID() {
    //         const list = getElementsByTagName("form");
    //         const results = [];
    //         for (const i = 0; i < list.length; i++) {
    //             const id = list[i].id;
    //             if (id && id.search(/^book_id_/) != -1) {
    //                 return(id);
    //             }
    //         }
    //         return(null);
    // }

}

