# seed file is for populating the db
# use active record -> sql to apply to the db

# we need to reset before we create 
Location.delete_all
User.delete_all 

User.create(title: 'Food')
User.create(title: 'Travel')
User.create(title: 'Tech')

5.times do
  @user = User.create(
    # faker helps out with giving fake data
    title: Faker::Games::SuperMario.character
  )

  3.times do
    Location.create(
      title: Faker::Games::SuperMario.game,
      body: Faker::Games::SuperMario.location,
      user_id: @user.id
    )
  end
end