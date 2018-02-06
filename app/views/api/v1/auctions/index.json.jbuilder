json.array! @auctions  do |auction|
  json.id auction.id
  json.title auction.title.titleize
  json.details auction.details.titleize
  json.ends_on auction.ends_on
  json.reserve_price auction.reserve_price


  json.created_at auction.created_at.to_formatted_s(:db)
  json.updated_at auction.updated_at.to_formatted_s(:db)

  json.author do
    json.id auction.user.id
    json.first_name auction.user.first_name
    json.last_name auction.user.last_name
    json.full_name auction.user.full_name
  end
end
