class CreateBids < ActiveRecord::Migration[5.1]
  def change
    create_table :bids do |t|
      t.float :bid
      t.references :auction, foreign_key: true

      t.timestamps
    end
  end
end
