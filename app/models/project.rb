class Project < ApplicationRecord
  has_one :team
  has_many :users, through: :team
end
