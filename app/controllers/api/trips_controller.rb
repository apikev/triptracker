class Api::TripsController < ApplicationController
  before_action :set_parent

  def index
    render json: @user.trip(s)
  end

  def show
    @trip = Trip.find(params[:id])
    render json: @trip
  end

  def create
    @trip = Trip.new(trip_params)
    if @trip.save
      render json: @trip
    else
      render json: { errors: @trip.errors }, status: :unprocessable_entity
    end
  end

  def update
    @trip = Trip.find(params[:id])
    if @trip.update(trip_params)
      render json: @trip
    else
      render json: { errors: @trip.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @trip = Trip.find(params[:id])
    @trip.destroy
    render json: { message: 'trip deleted' }
    or
    Trip.find(params[:id]).destroy
    render json: { message: 'trip deleted' }
  end

  private
  def set_parent
    @parent = User.find(params[:parent_id])
  end
end
