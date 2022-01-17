class TaskSerializer < ActiveModel::Serializer
  attributes :id, :summary, :details, :progress
end
