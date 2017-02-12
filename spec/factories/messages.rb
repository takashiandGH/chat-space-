FactoryGirl.define do

  factory :message do
    body          { Faker::StarWars.quote }
    image         { Faker::StarWars.quote }
    user_id       { Faker::Number.number(1) }
    group_id      { Faker::Number.number(1) }
    created_at    { Faker::Time.between(2.days.ago, Time.now, :all) }

  end

end
