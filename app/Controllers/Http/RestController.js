class RestController {
  async index() {
    return this.default('index');
  }

  async create({ response }) {
    return response.status(200).json({ model: this.constructor.model, action: 'create' });
  }

  async view() {
    return this.default('view');
  }

  async update() {
    return this.default('update');
  }

  async delete({ response }) {
    return response.status(204).json({ model: this.constructor.model, action: 'create' });
  }

  default(action) {
    return { model: this.constructor.model, action };
  }
}

RestController.model = null;

module.exports = RestController;
