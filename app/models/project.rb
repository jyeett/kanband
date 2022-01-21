class Project < ApplicationRecord
  has_many :tasks
  has_one :team
  has_many :users, through: :team
end
