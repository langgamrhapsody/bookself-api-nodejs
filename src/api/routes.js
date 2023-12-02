const { addNewBookHandler } = require("./books/handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addNewBookHandler,
  },
];

module.exports = routes;
