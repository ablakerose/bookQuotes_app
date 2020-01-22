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
        render json: book, status: 200
    end

    # def create
    #     @item = current_user.items.build(item_params)
    #     if @item.save
    #         redirect_to items_path
    #     else
    #         render :new
    #     end

    # def create
    #     if @item
    #         offer_price = offer_params[:offer_price] 
    #         @offer = current_user.offers.build(item_id: @item.id, offer_price: offer_price)
    #         if @offer.save
    #             redirect_to user_path(current_user)
    #             return
    #         end
    #     render :new
    #     end
    # end

 

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
            params.require(:book).permit(:title, :author)
            #params.require(:book, :title, :author)
        end
end
