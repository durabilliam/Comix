class Api::CartsController < ApplicationController
  def index
    carts = Cart.all
    render json: carts
  end

  def create
    @cart = Cart.new(cart_params)
    puts cart_params
      if @cart.save
        # login!
        render json: {
          status: 'created',
          cart: @cart
        }
      else
        render json: {
          status: 500,
          errors: @cart.errors.full_messages
        }
      end
    end

  def cart_params
    params.require(:cart).permit(:user_id, :comix_id)
  end
end