const {
  addNewBookHandler,
  getAllBooksHandler,
  getBookDetailHandler,
  updateBookHandler,
} = require("./books/handler");
const { SPECIFIC_BOOK_ROUTE, BOOK_ROUTE } = require("./routeConstants");

const routes = [
  {
    method: "POST",
    path: BOOK_ROUTE,
    handler: addNewBookHandler,
  },
  {
    method: "GET",
    path: BOOK_ROUTE,
    handler: getAllBooksHandler,
  },
  {
    method: "GET",
    path: SPECIFIC_BOOK_ROUTE,
    handler: getBookDetailHandler,
  },
  {
    method: "PUT",
    path: SPECIFIC_BOOK_ROUTE,
    handler: updateBookHandler,
  },
];

module.exports = routes;
