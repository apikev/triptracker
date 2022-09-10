class CreateAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :addresses do |t|
      t.string :street
      t.string :state
      t.string :city
      t.string :country
      t.string :region
      t.string :zip

      t.timestamps
    end
  end
end
