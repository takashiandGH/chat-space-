class GroupsController < ApplicationController
  def index
  end

  def new
    @group = Group.new
    @group.users << current_user
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      flash[:notice] = "グループを作成しました"
      redirect_to root_path
    else
      flash[:alert] = "グループ名を入力してください"
      redirect_to new_group_path
    end
  end

  def edit
    @group = Group.find(params[:id])
  end

  def update
    group = Group.find(params[:id])
    if group.update(group_params)
      flash[:notice] = "グループ情報を更新しました"
      redirect_to root_path
    else
      flash[:alert] = "グループ名を入力してください"
      redirect_to edit_group_path
    end

  end


  private

  def group_params
    params.require(:group).permit(:name)
  end

end
