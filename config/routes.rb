Rails.application.routes.draw do
  devise_for :users
  # root 'messages#index'

  resources :groups, only: [:new, :create, :update, :edit] do
  resources :messages, only: [:index, :create]
end

end
