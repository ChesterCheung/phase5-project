class CreateProductLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :product_locations do |t|
      t.belongs_to :product, null: false, foreign_key: true
      t.belongs_to :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
