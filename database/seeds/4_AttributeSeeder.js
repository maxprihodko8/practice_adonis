/*
|--------------------------------------------------------------------------
| AttributeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Attribute = use('App/Models/Attribute');
const Type = use('App/Models/Type');

class AttributeSeeder {
  async run() {
    await Attribute.query().delete();

    const types = await Type.all();

    await Promise.all(
      types.rows.map(type =>
        Promise.all([...Array(10).keys()].map(() => Factory.model('App/Models/Attribute').create({ type_id: type.id })))
      )
    );
  }
}

module.exports = AttributeSeeder;
