const RestController = require('./RestController');

class ProductsController extends RestController {}

ProductsController.model = 'App/Models/Product';

module.exports = ProductsController;
