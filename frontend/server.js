const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom Login Route - Simula respuesta de Django Rest Framework
server.post('/token', (req, res) => {
  console.log("Login attempt received:", req.body);
  // Devolvemos un token falso
  res.json({ token: 'fake-jwt-token-portfolio-demo' });
});

// Middleware para limpiar URLs
// Tu código Angular añade '/' al final (ej: /producto/), json-server prefiere sin (ej: /producto)
server.use((req, res, next) => {
    if (req.url.endsWith('/') && req.url.length > 1) {
        req.url = req.url.slice(0, -1);
    }
    next();
});

server.use(router);

server.listen(3000, () => {
  console.log('------------------------------------------------');
  console.log('✅ BACKEND SIMULADO LISTO EN PUERTO 3000');
  console.log('   Login: Acepta cualquier usuario/pass');
  console.log('   Recursos: /producto, /cliente, etc.');
  console.log('------------------------------------------------');
});
