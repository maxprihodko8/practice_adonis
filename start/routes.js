/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => ({ status: 'Ok', version: '1.0.0' }));

[{ controller: 'products' }, { name: 'attributes' }].forEach(controllerData => {
  const { controller, validator } = controllerData;
  const controllerClass = `${controller.charAt(0).toUpperCase() + controller.slice(1)}Controller`;

  Route.get(`/${controller}`, `${controllerClass}.index`);
  Route.get(`/${controller}/:id`, `${controllerClass}.view`);
  Route.delete(`/${controller}/:id`, `${controllerClass}.delete`);

  if (!controllerData.validator) {
    Route.put(`/${controller}/:id`, `${controllerClass}.update`);
    Route.patch(`/${controller}/:id`, `${controllerClass}.update`);
    Route.post(`/${controller}`, `${controllerClass}.create`);
  } else {
    Route.post(`/${controller}`, `${controllerClass}.create`).validator(validator);
    Route.put(`/${controller}/:id`, `${controllerClass}.update`).validator(validator);
    Route.patch(`/${controller}/:id`, `${controllerClass}.update`).validator(validator);
  }
});
