module.exports = (app) => {
  const { HomeController: homeController } = app.controllers;
  app.get('/', homeController.index);
  app.post('/entrar', homeController.login);
  app.get('/sair', homeController.logout);
};