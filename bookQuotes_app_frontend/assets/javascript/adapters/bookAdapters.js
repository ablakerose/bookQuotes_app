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

    createBookQuote(quoteText, bookId) {
        const quote = {
            quote_text: quoteText
        }
        return fetch(`${this.baseUrl}/${bookId}/quotes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ quote })
        }).then(res => res.json())
    }

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





// class BooksAdapter {
//     constructor() {
//         this.baseUrl = 'http://localhost:3000/api/v1/books'
//     }
    
//     getBooks() {
//         return fetch(this.baseUrl).then(res => res.json()
//         )
//     }

//     createBook(title, author, quote) {
//         const book = {
//             title,
//             author, 
//             quotes_attributes: [{quote_text: quote}]
//         }
//         return fetch(this.baseUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//               },
//             body: JSON.stringify({ book})
//         }).then(res => res.json())
//     }

//     createBookQuote(quoteText, bookId) {
//         const quote = {
//             quote_text: quoteText
//         }
//         return fetch(`${this.baseUrl}/${bookId}/quotes`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//           },
//         body: JSON.stringify({ quote })
//         }).then(res => res.json())
//     }

//     updateBook(book, id) {
//         return fetch(`${this.baseUrl}/${id}`, {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json'
//               },
//             body: JSON.stringify({ book })
//         }).then(res => res.json())
//     }
// }

  