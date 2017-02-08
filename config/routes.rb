Rails.application.routes.draw do
  devise_for :users
  root 'messages#index'

  resources :groups, only: [:new, :create, :update, :edit]
  resources :users,  only: [:index]

end
