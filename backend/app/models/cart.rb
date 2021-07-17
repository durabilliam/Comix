class Cart < ActiveRecord::Base
  validates :user_id, presence: true
  validates :comix_id, presence: true
end
