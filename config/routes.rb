Rails.application.routes.draw do
  namespace :api do
    resources :controller_names
  end
end
