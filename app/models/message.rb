class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group

  validates :body, :user_id, :group_id, presence: true

  # def params_for_json
  #   {user_name: self.user.name, created_at: self.created_at, body: self.body}
  # end
end
