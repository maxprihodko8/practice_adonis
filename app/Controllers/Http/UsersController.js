const RestController = require('./RestController');

class UsersController extends RestController {}

UsersController.model = 'App/Models/User';

module.exports = UsersController;
