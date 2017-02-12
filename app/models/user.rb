class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  #association
  has_many :group_user
  has_many :groups, through: :group_user
  has_many :messages

  validates :name, presence: true

end
