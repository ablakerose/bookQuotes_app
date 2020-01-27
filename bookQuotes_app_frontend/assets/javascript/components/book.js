class Book {
    constructor(bookJSON){
        this.id = bookJSON.id
        this.title = bookJSON.title
        this.author = bookJSON.author
        this.quotes= bookJSON.quotes 
        this.initBindingsAndEventListeners()     
    }

    initBindingsAndEventListeners() {
       
    }
  
    renderQuoteForm() {
        const quoteForm = document.createElement("form")
        quoteForm.id = `book_id_${this.id}`
        
        quoteForm.innerHTML= `<input type="text" name="quote-text" class="add-quote-text" placeholder="Additional Quote"> <input type="submit" value="save quote">`    
        return quoteForm.outerHTML
    }

    // return the ID of the first form object that has the right type of ID
    //     findFirstBookFormID() {
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

    // getForms() {
    //     const result = document.getElementsByClassName("book-container")
    //     for (const i = 0; i < result.length; i++) {
    //        result[i]
    //        console.log(result[i])
    //     }        
    // }

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


     

    // renderNewQuoteButton() {

        //to add a quote to an existing book, render a form that includes the id of the book 
        // 

    getQuotes() {
        return this.quotes.map(quote => `<li>${quote.quote_text}</li>`).join('')
    }

}











