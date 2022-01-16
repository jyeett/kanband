class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :summary
      t.string :details
      t.string :progress
      t.references :projects, null: false, foreign_key: true

      t.timestamps
    end
  end
end
