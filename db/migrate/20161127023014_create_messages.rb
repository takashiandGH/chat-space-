class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.text :body
      t.string :image
      t.refarences :user ,null:false ,index:true ,foreign_key:true
      t.refarences :group ,null:false ,index:true ,foreign_key:true

      t.timestamps
    end
  end
end
