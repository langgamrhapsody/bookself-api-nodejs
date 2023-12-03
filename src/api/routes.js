const {
  addNewBookHandler,
  getAllBooksHandler,
  getSpecificBookHandler,
} = require("./books/handler");

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
  {
    method: "GET",
    path: "/books/{id}",
    handler: getSpecificBookHandler,
  },
];

module.exports = routes;
