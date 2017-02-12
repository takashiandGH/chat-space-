require 'rails_helper'

describe MessagesController do
  let(:user) { create(:user) }
  let(:group) { create(:group) }
  let(:message) { create(:message, user_id: user.id, group_id: group.id) }
  let(:messages) { create_list(:message, 3, user: user, group: group )}
  describe 'GET #index' do

    before do
      login_user user
      get :index, group_id: group
    end


    it "renders the :index template" do
      expect(response).to render_template :index
    end
  end


end
