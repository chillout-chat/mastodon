class AddCatToAccounts < ActiveRecord::Migration[5.2]
  disable_ddl_transaction!

  def change
    add_column :accounts, :cat, :boolean
    change_column_default :accounts, :cat, false
    change_column_null :accounts, :cat, false
  end
end
