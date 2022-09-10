class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :loc_name
      t.string :street_address
      t.string :city
      t.string :state
      t.string :zip
      t.belongs_to :trip, null: false, foreign_key: true

      t.timestamps
    end
  end
end
