// console.log("Criando um site de noticias com NodeJs");

var http = require("http");

var server = http.createServer(function (req, res) {
  var categoria = req.url;

  if (categoria == "/tecnologia") {
    res.end("<html><body>Notícas de Tecnologia</body></html>");
  } else if (categoria == "/moda") {
    res.end("<html><body>Notícas de Moda</body></html>");
  } else if (categoria == "/beleza") {
    res.end("<html><body>Notícas de Beleza</body></html>");
  } else {
    res.end("<html><body>Portal de notícias</body></html>");
  }
});

server.listen(3000);
