Rails.application.routes.draw do

  match '/biddr', to: "biddr#index", via: :all
  match '/biddr/*path', to: "biddr#index", via: :all


  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :auctions do
        resources :bids, only: [:index, :show, :create, :destroy], shallow: true
      end
      # match '/biddr', to: "api/v1/api/v1/biddr#index", shallow: true, via: :all
      # match '/biddr/*path', to: "api/v1/api/v1/biddr#index", shallow: true, via: :all
      resources :tokens, only: [:create], shallow: true
      resources :users
      match '*unmatched_route', to: 'application#not_found', via: :all
    end
  end
  # get('/', { to: 'api/v1/api/v1/api/v1/biddr#index', as: :home})
end
