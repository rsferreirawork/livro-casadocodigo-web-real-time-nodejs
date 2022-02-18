const autenticar = require('../middlewares/autenticador');

module.exports = (app) => {
    const { ChatController: chatController } = app.controllers;
    app.get('/chat', autenticar, chatController.index);
}