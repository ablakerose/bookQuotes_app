class BooksAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/books'
    }
    
    getBooks() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    createBook(title, author, quote) {
        const book = {
            title,
            author, 
            quotes_attributes: [{quote_text: quote}]
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ book})
        }).then(res => res.json())
    }

    // createBookQuote(quote, bookId) {
    // //     //fetch posting to baseURL/${bookID}/quotes
    //     const book = {
    //     quotes_attributes: [{quote_text: quote}]
    
            
    //     }
    //     return fetch(`${this.baseUrl}/${bookId}`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //       },
    //     body: JSON.stringify({ book })
    // }).then(res => res.json())

    // }

    updateBook(book, id) {
        
        return fetch(`${this.baseUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ book })
        }).then(res => res.json())
    }

}

  