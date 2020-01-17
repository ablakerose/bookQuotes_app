class CreateQuotes < ActiveRecord::Migration[6.0]
  def change
    create_table :quotes do |t|
      t.integer :book_id
      t.string :quote_text

      t.timestamps
    end
  end
end
