require 'rails_helper'

  describe Message do
    describe 'create a message' do

        # message = build(:message)
        let(:message) { FactoryGirl.build(:message) }


        it "is valid with a body" do
          expect(message).to be_valid
        end


        it "is invalid without a body" do
          message.body =  ""
          message.valid?
          expect(message.errors[:body]).to include("を入力してください。")
        end


    end
  end
