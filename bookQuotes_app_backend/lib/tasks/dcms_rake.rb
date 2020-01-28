namespace :db do
    desc 'Drop, Create, Migrate, Seed db, Start rails server'
    task dcms: :environment do
        puts 'dropping db...'
        Rake::Task['db:drop].invoke
        
        puts 'creaeting db....'
        Rake::Task['db:seek']

#INCOMPLETE