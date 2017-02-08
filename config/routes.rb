Rails.application.routes.draw do
  devise_for :users
  root 'messages#index'

  resources :groups, only: [:index, :new, :create, :update, :edit, :show]
  resources :users,  only: [:index]

end
