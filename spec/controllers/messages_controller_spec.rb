require 'rails_helper'

describe MessagesController do
  let(:user) { create(:user) }
  let(:group) { create(:group) }
  let(:message) { create(:message, user_id: user.id, group_id: group.id) }

  describe 'GET #index' do

    before do
      login_user user
      get :index, group_id: group
    end

    it "assigns the requested contact to @group" do
      #@groupを生成出来ること
      expect(assigns(:group)).to eq group
    end

    it "renders the :index template" do
      #indexのviewを読むこと
      expect(response).to render_template :index
    end
  end


  describe 'POST #create' do

    it "saves the new message in the database" do
      #新規メッセージを保存できること
      expect(message).to be_valid
    end

  end

end
