class MessagesController < ApplicationController
  def index
    @group = Group.find(params[:group_id])
    @groups = current_user.groups
    @message = Message.new
    @messages = @group.messages
  end

  def create
    @message = current_user.messages.new(message_params)
      if @message.save
        respond_to do |format|
          format.html { redirect_to group_messages_path }
          format.json { render json: message.params_for_json }
         end
      else
        flash[:alert] = "メッセージを送信できませんでした"
      end
       # redirect_to group_messages_path
  end



  private

  def message_params
    params.require(:message).permit(:body, :image).merge(group_id: params[:group_id])
  end

end
