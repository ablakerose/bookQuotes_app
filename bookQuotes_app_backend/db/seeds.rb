# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Book.destroy_all
Quote.destroy_all

reckon_sered = Book.create(title: 'Until We Reckon', author: 'Danielle Sered')
sister_lorde = Book.create(title: 'Sister Outsider—Essays and Speeches', author: 'Audre Lorde')
paying_waters = Book.create(title: 'The Paying Guests', author: 'Sarah Waters')

reckon_sered.quotes.create(quote_text: "This emphasis on repair reflects restorative justice’s primary concern with harm rather than with broken rules. ")
sister_lorde.quotes.create(quote_text: "...all too often, guilt is just another name for impotence, for defensiveness destructive of communication; it becomes a device to protect ignorance and the continuation of things the way they are, the ultimate protection for changelessness.")
paying_waters.quotes.create(quote_text: "It was like the white of an egg growing pearly in hot water, a milk sauce thickening in the pan. It was as subtle yet as tangible as that.")
