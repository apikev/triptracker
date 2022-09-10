class Api::UsersController < ApplicationController
<<<<<<< HEAD
  def index
    render json: User.all
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: { errors: @user.errors }, status: :unprocessable_entity
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: @user
    else
      render json: { errors: @user.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    render json: { message: 'user deleted' }
    or
    User.find(params[:id]).destroy
    render json: { message: 'user deleted' }
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end

=======

def index
  @users = User.all
  render component: 'Users', props:{ users: @users }
end

def show
  @user = User.find(params[:id])
  render component: 'User', props: { user: @user }
end

def new
  @user = User.new
  render component: 'UserNew', props: { user: @user }
end

def edit
  @user = User.find(params[:id])
  render component: 'UserEdit', props: { user: @user }
end

def create
  @user = User.new(user_params)
  if @user.save
    do something or somewhere
  else
    render component: 'UserNew', props: { user: @user }
  end
end

def update
  @user = User.find(params[:id])
  if @user.update(user_params)
    do something
  else
    render component: 'UserEdit', props: { user: @user }
  end
end

def destroy
  @user = User.find(params[:id])
  @user.destroy
  send somewhere
  or
  User.find(params[:id]).destroy
  send somewhere
end

private
def user_params
  params.require(:user).permit(:email, :password)
>>>>>>> e937e363cde8b925b05f17c7feb8761e5d2152fd
end
