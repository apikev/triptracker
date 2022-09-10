Rails.application.routes.draw do
  namespace :api do
    resources :controller_names
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  # namespace :api do
  #   resources :
  # end

end
