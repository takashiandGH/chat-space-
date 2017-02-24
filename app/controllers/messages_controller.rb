class MessagesController < ApplicationController
  def index
    @group = Group.find(params[:group_id])
    @groups = current_user.groups
    @message = Message.new
    @messages = @group.messages.includes(:user)
      respond_to do |format|
        format.html {
          @message = Message.new
        }
        format.json
      end
  end


  def create
    @message = current_user.messages.new(message_params)
      if @message.save
        respond_to do |format|
          format.html { redirect_to group_messages_path }
          format.json
         end
      else
        flash[:alert] = "メッセージを送信できませんでした"
      end
  end



  private

  def message_params
    params.require(:message).permit(:body, :image).merge(group_id: params[:group_id])
  end

end
