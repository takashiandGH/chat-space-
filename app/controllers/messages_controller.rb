class MessagesController < ApplicationController
  def index
  @group = Group.find(params[:group_id])
  @groups = current_user.groups
  @message = Message.new
  @messages = @group.messages
  end

  def new
  end

  def create
  @message = current_user.messages.new(message_params)
    if @message.save
      flash[:notice] = "メッセージを送信しました"
    else
      flash[:alert] = "メッセージを送信できませんでした"
    end
    redirect_to group_messages_path
  end



  private

  def message_params
    params.require(:message).permit(:body, :image).merge(group_id: params[:group_id])
  end



end
