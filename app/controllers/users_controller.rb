class UsersController < ApplicationController
  def edit
  end

  def search
    @users = User.where(['name LIKE ?', "%#{params[:input]}%"])
    respond_to do |format|
      format.json { render json: @users }
    end
  end

end
