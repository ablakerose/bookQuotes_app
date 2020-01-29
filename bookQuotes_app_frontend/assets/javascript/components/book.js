class Book {
    constructor(bookJSON){
        this.id = bookJSON.id
        this.title = bookJSON.title
        this.author = bookJSON.author
        this.quotes= bookJSON.quotes 
    }

    renderQuoteForm(id) {
        const quoteForm = document.createElement("form")
        quoteForm.setAttribute('data-id', this.id)
        quoteForm.innerHTML= `<input type="text" name="quote-text" class="add-quote-text" placeholder="Additional Quote"> <input type="submit" value="save quote">`    
        return quoteForm.outerHTML
    }  

    getQuoteFormValue() {
        const quote_value = this.quoteForm.value
        return quote_value
    }

    renderBook() {
        return `<div class="book-container" id="book-${this.id}">
                <h2 data-id=${this.id} data-class="title-class" class="title">${this.title}</h2>
                <h2 data-id=${this.id} data-class="author-class" class="author"> by ${this.author} </h2>
                <ul> ${this.quotes ? this.getQuotes() : "No quotes recorded yet"}</ul>    
                ${this.renderQuoteForm()}
                </div>`  
        }

    getQuotes() {
        return this.quotes.map(quote => `<li>${quote.quote_text}</li>`).join('')
    }

}




// class Book {
//     constructor(bookJSON){
//         this.id = bookJSON.id
//         this.title = bookJSON.title
//         this.author = bookJSON.author
//         this.quotes= bookJSON.quotes 
//     }

//     renderQuoteForm(id) {
//         const quoteForm = document.createElement("form")
//         quoteForm.setAttribute('data-id', this.id)
//         quoteForm.innerHTML= `<input type="text" name="quote-text" class="add-quote-text" placeholder="Additional Quote"> <input type="submit" value="save quote">`    
//         return quoteForm.outerHTML
//     }  

//     getQuoteFormValue() {
//         const quote_value = this.quoteForm.value
//         return quote_value
//     }

//     renderBook() {
//         return `<div class="book-container" id="book-${this.id}">
//                 <h2 data-id=${this.id} data-class="title-class" class="title">${this.title}</h2>
//                 <h2 data-id=${this.id} data-class="author-class" class="author"> by ${this.author} </h2>
//                 <ul> ${this.quotes ? this.getQuotes() : "No quotes recorded yet"}</ul>    
//                 ${this.renderQuoteForm()}
//                 </div>`  
//         }

//     getQuotes() {
//         return this.quotes.map(quote => `<li>${quote.quote_text}</li>`).join('')
//     }

// }











