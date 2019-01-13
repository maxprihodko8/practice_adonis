/*
|--------------------------------------------------------------------------
| ProductAttributeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const faker = require('faker');

const ProductAttributes = use('App/Models/ProductAttributes');
const Attribute = use('App/Models/Attribute');
const Product = use('App/Models/Product');

class ProductAttributeSeeder {
  async run() {
    await ProductAttributes.query().delete();

    const attributes = await Attribute.query().fetch();

    const productIdsList = await Product.ids();

    await Promise.all(
      [...attributes.rows, ...attributes.rows, ...attributes.rows, ...attributes.rows].map(attribute =>
        Factory.model('App/Models/ProductAttributes').create({
          value: this.getValueBasedOnType(attribute.type_id),
          attribute_id: attribute.id,
          product_id: productIdsList[Math.floor(Math.random() * productIdsList.length)]
        })
      )
    );
  }

  getValueBasedOnType(typeId) {
    if (typeId === 0) {
      return faker.phone.phoneNumber();
    }

    if (typeId === 2) {
      return faker.random.number();
    }

    return null;
  }
}

module.exports = ProductAttributeSeeder;
