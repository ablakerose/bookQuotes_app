class BooksAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/books'
    }
    
    getBooks() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
    
    createBook(value) {
        const book = {
            title: value,
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                
              },
            body: JSON.stringify({ book })
        }).then(res => res.json())
    }

    updateBook(value, id) {
        const book = {
            title: value,
        }

        return fetch(`${this.baseUrl}/id`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
                
              },
            body: JSON.stringify({ book })
        }).then(res => res.json())
    }

}
