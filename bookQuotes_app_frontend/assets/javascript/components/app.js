class App {
    constructor() {
        this.books = []
        this.adapter = new BooksAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadBooks()
        
    }

    initBindingsAndEventListeners() {
        this.booksContainer = document.getElementById('books-container')
        this.body = document.querySelector('body')
        this.newBookTitle = document.getElementById('new-book-title')
        this.bookForm = document.getElementById('new-book-form')
        this.bookForm.addEventListener('submit', this.createBook.bind(this))
        this.booksContainer.addEventListener('dblclick', this.handleBookClick.bind(this))
        this.booksContainer.addEventListener('blur', this.updateBook.bind(this), true)
    }
    

    createBook(e){
        e.preventDefault()
        console.log(this.bookForm.value)
        const value = this.newBookTitle.value

        this.adapter.createBook(value).then(book => {
            this.books.push(new Book(book))
            this.newBookTitle.value = ''
            this.render()
        })
    }

    handleBookClick(e) {
        const li = e.target
        li.contentEditable = 'true' 
        li.focus()
        li.classList.add('editable')
    }
 
    updateBook(e) {
        const li = e.target
        li.contentEditable = 'false' 
        li.classList.remove('editable')
        const newValue = li.innerHTML
        this.adapter.updateBook(newValue, id)
    }

    fetchAndLoadBooks() {
        this.adapter
        //this.adapter is equal to our new instance of Adapter which means we can get the books
        //this makes a call to our backend api
        //video 1 at 30 mins reviews the flow. 
        .getBooks()
        .then(books => {
            books.forEach(book => this.books.push(new Book(book)))
            //console.log(this.books)
        })
        .then(() => {
            this.render()
            //console.log("test")
        })
    }
render() {
    this.booksContainer.innerHTML = this.books.map(book => book.renderBook()).join('')

    }
}




// class Book {
//     constructor(bookJSON){
//         this.id = bookJSON.id
//         this.title = bookJSON.title
//         this.author = bookJSON.author
//     }
    
//     renderLi() {
//         return `<li>${this.title}</li>'
//     }

// }

// class App{
//     constructor() {
//         this.books = new Books()
//     }
// }