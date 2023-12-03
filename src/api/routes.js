const { addNewBookHandler, getAllBooksHandler } = require("./books/handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addNewBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
];

module.exports = routes;
