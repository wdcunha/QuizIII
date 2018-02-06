class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :details, :ends_on, :reserve_price

  belongs_to :user, key: :author

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :full_name
  end

  has_many :bids

  class BidSerializer < ActiveModel::Serializer
    attributes :id, :bid, :created_at, :updated_at, :author_full_name

    def author_full_name
      object.user&.full_name
    end
  end
end
