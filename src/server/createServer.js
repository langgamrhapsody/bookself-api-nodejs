const Hapi = require("@hapi/hapi");
const routes = require("../api/routes");

const createServer = () => {
  const server = Hapi.server({
    port: 9000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  return server;
};

module.exports = createServer;
