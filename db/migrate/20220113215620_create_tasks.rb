class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :summary
      t.string :details
      t.string :progress
      t.string :category_name
      t.references :project, null: false, foreign_key: true
      t.references :category

      t.timestamps
    end
  end
end
