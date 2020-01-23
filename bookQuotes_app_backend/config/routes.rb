Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :books do
        #resources :quotes, only: [:create, :new, :index]
        resources :quotes, shallow: true
      end

        
      
      #remember to omit what I'm not using if I'm only doing some of the CRUD actions
    end
  end
end
