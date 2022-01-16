class User < ApplicationRecord
    has_secure_password
    has_many :teams
    has_many :projects, through: :teams
    has_many :tasks, through: :projects

    validates :username, :email, presence: true, uniqueness: true
end
