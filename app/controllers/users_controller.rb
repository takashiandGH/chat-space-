class UsersController < ApplicationController
  def edit
  end

  def search
    @users = User.where(['name LIKE ?', "%#{params[:name]}%"])
      respond_to do |format|
      format.json

    end
  end

end
