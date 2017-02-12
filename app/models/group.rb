class Group < ApplicationRecord

  has_many :group_user
  has_many :users, through: :group_user
  has_many :messages

  # accepts_nested_attributes_for :users

  validates :name, presence: true

  def latest_message
    messages.last.try(:body) || "まだメッセージはありません。"
  end

end
