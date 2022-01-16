class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.references :user
      t.references :project

      t.timestamps
    end
  end
end
