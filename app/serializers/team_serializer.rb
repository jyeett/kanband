class TeamSerializer < ActiveModel::Serializer
  attributes :id, :user, :project
end
