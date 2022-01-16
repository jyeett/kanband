class TaskSerializer < ActiveModel::Serializer
  attributes :id, :summary, :details, :progress
  has_one :projects
end
