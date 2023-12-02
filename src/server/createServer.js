const Hapi = require("@hapi/hapi");

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

  return server;
};

module.exports = createServer;
