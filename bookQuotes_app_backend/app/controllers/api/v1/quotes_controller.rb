class Api::V1::QuotesController < ApplicationController
    def index
        id = params[:book_id]
        if id && book = Book.find_by_id(id)
            quotes = book.quotes
        else
            quotes = Quotes.all
        end
        render json: quotes, include: :books
    end

    def show
        quote = Quote.find(params[:id])

        render json: quote, status: 200
    end

    def create
        
        book = Book.find(params[:book_id])
        quote = book.quotes.create(quote_params)
        render json: quote,  include: :book
    end

    def update
        quote = Quote.find(params[:id])
        quote.update(quote_params)
        render json: quote, status: 200
    end

    def destroy
        quote = Quote.find(params[:id])
        quote.delete

        render json: {quoteId: quote.id}
    end


    private
        def quote_params
            params.require(:quote).permit(:quote_text)
        end

end
