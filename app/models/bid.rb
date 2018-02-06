class Bid < ApplicationRecord
  belongs_to :user
  belongs_to :auction

  validates :bid, presence: true

end