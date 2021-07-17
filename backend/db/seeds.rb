# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require('faker')

puts "Re-creating Fake Users ..."

User.destroy_all
Cart.destroy_all
#Comment.destroy_all
#NewBurger.destroy_all
#Burgerlike.destroy_all

3.times do
  User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password_digest: Faker::Internet.password)
end

puts "Adding Fake Favourites"

carts = Cart.create([{user_id: 2, comix_id: 9999}]) 
