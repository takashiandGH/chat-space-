class GroupsController < ApplicationController
  def index
  end

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(create_params)
    if @group.save
      flash[:notice] = "グループを作成しました"
      redirect_to root_path
    else
      flash[:alert] = "グループを作成できませんでした"
      redirect_to new_group_path
    end
  end

   def edit
    @group = Group.find(params[:id])
  end

  def update
    group = Group.find(params[:id])
    group.update(create_params)

    if group.update(create_params)
      flash[:notice] = "グループ情報を更新しました"
      redirect_to root_path
    else
      flash[:alert] = "グループ情報を更新できませんでした"
      redirect_to edit_group_path
    end

  end


  private

  def create_params
    params.require(:group).permit(:name)
  end

end
