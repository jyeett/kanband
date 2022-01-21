class TaskSerializer < ActiveModel::Serializer
  attributes :id, :summary, :details, :progress, :category_name
end
