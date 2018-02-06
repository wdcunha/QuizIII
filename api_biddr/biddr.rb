require 'faraday'
require 'json'

response = Faraday.get 'http://localhost:3000/api/v1/auctions'

p JSON.parse(response.body)
