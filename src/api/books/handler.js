const addNewBookHandler = (request, h) => {
  const response = h.response({
    status: "fail",
    message: "Gagal Menambahkan Buku!",
  });

  response.code(500);
  return response;
};

module.exports = { addNewBookHandler };
