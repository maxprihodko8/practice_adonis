const RestController = require('./RestController');

class TypesController extends RestController {}

TypesController.model = 'App/Models/Type';

module.exports = TypesController;
