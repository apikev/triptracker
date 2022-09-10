class Api::LocationsController < ApplicationController
  before_action :set_parent

  def index
    render json: @trip.location(s)
  end

  def show
    @location = Location.find(params[:id])
    render json: @location
  end

  def create
    @location = Location.new(location_params)
    if @location.save
      render json: @location
    else
      render json: { errors: @location.errors }, status: :unprocessable_entity
    end
  end

  def update
  @location = Location.find(params[:id])
  if @location.update(location_params)
    render json: @location
  else
    render json: { errors: @location.errors }, status: :unprocessable_entity
  end
end

def destroy
  @location = Location.find(params[:id])
  @Location.destroy
  render json: { message: 'location deleted' }
  or
  Location.find(params[:id]).destroy
  render json: { message: 'location deleted' }
end

private
  def set_parent
    @parent = Trip.find(params[:parent_id])
  end
end
