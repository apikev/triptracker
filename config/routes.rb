Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :trips
    end

    resources :trips, only: [:index, :show, :create, :update, :destroy] do
      resources :locations
    end

    resources :locations, only: [:index, :show, :create, :update, :destroy] do
      resources :addresses
    end
  end
end
