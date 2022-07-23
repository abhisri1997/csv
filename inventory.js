const author = require("./authors");
const book = require("./books");
const magazine = require("./magazines");

const getAuthors = () => {
  author.getAuthor((err, res) => {
    if (!err) {
      console.log(res);
    } else {
      console.log(err);
    }
  });
};
const getBooks = () => {
  book.getBooks((err, res) => {
    if (!err) {
      console.log(res);
    } else {
      console.log(err);
    }
  });
};
const getBookByIsbn = (ISBN) => {
  book.getBookByISBN(ISBN, (err, res) => {
    if (!err) {
      console.log(res);
    } else {
      console.log(err);
    }
  });
};

const getMagazine = () => {
  magazine.getMagazine((err, res) => {
    if (!err) {
      console.log(res);
    } else {
      console.log(err);
    }
  });
};
const getMagazineByIsbn = (ISBN) => {
  magazine.getMagazineByISBN(ISBN, (err, res) => {
    if (!err) {
      console.log(res);
    } else {
      console.log(err);
    }
  });
};

const getAuthorPublished = (author) => {
  magazine.getMagazineByAuthor(author, (err, res) => {
    if (!err) {
      console.log(`Magazines by author -  ${author} \n`);
      console.log(res);
    } else {
      console.log(err);
    }
  });

  book.getBooksByAuthor(author, (err, res) => {
    console.log(`Books by author -  ${author} \n`);
    if (!err) {
      console.log(res);
    } else {
      console.log(err);
    }
  });
};

module.exports = {
  getAuthors,
  getBooks,
  getBookByIsbn,
  getMagazine,
  getMagazineByIsbn,
  getAuthorPublished,
};
