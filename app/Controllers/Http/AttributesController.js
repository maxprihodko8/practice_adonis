const RestController = require('./RestController');

class AttributesController extends RestController {}

AttributesController.model = 'App/Models/Attribute';

module.exports = AttributesController;
