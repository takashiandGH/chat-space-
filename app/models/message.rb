class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group

  validates :body, :user_id, :group_id, presence: true
end
