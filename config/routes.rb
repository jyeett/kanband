Rails.application.routes.draw do
  
  resources :teams
  resources :categories
  resources :tasks
  resources :projects
  # resources :users
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  # get "/teams", to: "teams#index"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
