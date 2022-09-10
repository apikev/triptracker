class Api::AddressesController < ApplicationController
  before_action :set_parent

  def index
    render json: @location.address(s)
  end

  def show
    @address = Address.find(params[:id])
    render json: @address
  end

  def create
    @address = Address.new(address_params)
    if @address.save
      render json: @address
    else
      render json: { errors: @address.errors }, status: :unprocessable_entity
    end
  end

  def update
    @address = Address.find(params[:id])
    if @address.update(address_params)
      render json: @address
    else
      render json: { errors: @address.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @address = Address.find(params[:id])
    @address.destroy
    render json: { message: 'address deleted' }
    or
    Address.find(params[:id]).destroy
    render json: { message: 'address deleted' }
  end

  private
  def set_parent
    @parent = location.find(params[:parent_id])
  end
end
