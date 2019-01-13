/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Product = use('App/Models/Product');
const User = use('App/Models/User');
const Type = use('App/Models/Type');

class ProductSeeder {
  async run() {
    await Product.query().delete();

    const users = await User.all();
    const types = await Type.all();

    await Promise.all(
      users.rows.map(user =>
        Promise.all(
          types.rows.map(type =>
            Factory.model('App/Models/Product').create({
              user_id: user.id,
              type_id: type.id
            })
          )
        )
      )
    );
  }
}

module.exports = ProductSeeder;
