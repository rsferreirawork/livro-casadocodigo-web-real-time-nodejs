module.exports = (app) => {
  return {
    index(req, res) {
      res.render('home/index');
    },

    login(req, res) {
      const {usuario} = req.body;
      const {nome, email} = usuario;

      if (email && nome) {
        usuario.contatos = [];
        req.session.usuario = usuario;
        res.redirect('/contatos');
      } else {
        res.redirect('/');
      }
    },

    logout(req, res) {
      req.session.destroy();
      res.redirect('/')
    }
  };
};