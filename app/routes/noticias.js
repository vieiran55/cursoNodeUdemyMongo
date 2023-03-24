module.exports = function (application) {
  // rota das noticias
  application.get("/noticias", function (req, res) {
    application.app.controllers.noticias.noticias(application, req, res);
  });

  // rota da noticia

  application.get("/noticia", function (req, res) {
    application.app.controllers.noticias.noticia(application, req, res);
  });
};
