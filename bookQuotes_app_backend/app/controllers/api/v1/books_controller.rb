class Api::V1::BooksController < ApplicationController
    
    
    def index
        books = Book.all 
        render json: books, include: :quotes
    end

    def show
        book = Book.find_by_id(params[:id])
        render json: book, status: 200
    end

    def create
    
        book = Book.create(book_params)
        render json: book, include: :quotes
    end

    def update
        book = Book.find(params[:id])
        book.update(book_params)
        render json: book, status: 200
    end

    def destroy
        book = Book.find(params[:id])
        book.delete

        render json: {bookId: book.id}
    end


    private
        def book_params
            params.require(:book).permit(:title, :author, quotes_attributes: [:quote_text])
        end
end
