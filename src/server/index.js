const createServer = require("./createServer.js");

const init = async () => {
  const server = createServer();
  await server.start();
  console.log(`Server is rynning on ${server.info.uri}`);
};

init();
