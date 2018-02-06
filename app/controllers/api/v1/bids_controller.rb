class Api::V1::BidsController < ApplicationController
  before_action :authenticate_user!, :find_auction
  before_action :find_bid, :authorize_user!, only: [:destroy]

  def create
    @bid = Bid.new(bid_params)
    @bid.auction = @auction
    @bid.user = current_user
    if @bid.save!
      render json: @bid, status 201
    else
      render json: { error: @bid.errors.full_messages }
    end
  end

  def destroy
    if @bid.destroy
      render json: { message: 'Bid deleted!' }
    else
      head :bad_request
    end
  end

  private
  def bid_params
    params.require(:bid).permit(:bid, :user_id)
  end

  def find_auction
    @auction = Auction.find params[:auction_id]
  end

  def find_bid
    @bid = Bid.find params[:id]
  end

  def authorize_user!
    unless can?(:crud, @bid)
      render json: { message: 'Access Denied!' }
    end
  end
end
