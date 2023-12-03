const { nanoid } = require("nanoid");
const bookshelf = require("../bookshelf");

const addNewBookHandler = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  if (!name) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambahkan buku. Mohon isi nama buku",
    });

    response.code(400);
    return response;
  }

  if (readPage > pageCount) {
    const response = h.response({
      status: "fail",
      message:
        "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
    });

    response.code(400);
    return response;
  }

  const id = nanoid(16);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const book = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  bookshelf.push(book);
  const isSuccess = bookshelf.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    console.log(bookshelf);
    const response = h.response({
      status: "success",
      message: "Buku berhasil ditambahkan",
      data: {
        bookId: id,
      },
    });

    response.code(201);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Gagal Menambahkan Buku!",
  });

  response.code(500);
  return response;
};

const getAllBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query;

  const booleanValue = (v) => {
    const newValue = parseInt(v);
    return newValue === 1 ? true : false;
  };

  let books = bookshelf;

  books = books.filter((book) => {
    return (
      (!name || book.name.toLowerCase().includes(name.toLowerCase())) &&
      (reading === undefined || book.reading === booleanValue(reading)) &&
      (finished === undefined || book.finished === booleanValue(finished))
    );
  });

  const response = h.response({
    status: "success",
    data: {
      books: books,
    },
  });

  response.code(200);
  return response;
};

module.exports = { addNewBookHandler, getAllBooksHandler };
