/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Faker = require('faker');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

Factory.blueprint('App/Models/User', async (faker, i, data) => ({
  username: data.username || Faker.internet.userName(),
  email: data.email || Faker.internet.email(),
  password: data.password || 'user'
}));

Factory.blueprint('App/Models/Product', async (faker, i, data) => ({
  name: data.name || Faker.random.words(),
  price: data.price || Faker.commerce.price(),
  type_id: data.type_id || Faker.random.number({ max: 4 }),
  user_id: data.user_id || Faker.random.number({ max: 4 })
}));

Factory.blueprint('App/Models/Attribute', async (faker, i, data) => ({
  name: data.name || Faker.random.words(),
  type_id: data.type_id || Faker.random.number({ max: 4 })
}));

Factory.blueprint('App/Models/ProductAttributes', async (faker, i, data) => ({
  value: data.value || Faker.random.words(),
  product_id: data.product_id || Faker.random.number({ max: 9 }),
  attribute_id: data.attribute_id || Faker.random.number({ max: 99 })
}));
