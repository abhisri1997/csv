const fs = require("fs");
const { parse } = require("csv-parse");

const getBooks = (cb) => {
  const data = [];
  fs.createReadStream("./docs/books.csv")
    .pipe(parse({ delimiter: ";", from_line: 2 }))
    .on("data", (row) => {
      const books = {
        isbn: row[1],
        title: row[0],
        author: row[2],
        description: row[3],
      };
      data.push(books);
    })
    .on("end", () => {
      cb(null, data);
    })
    .on("error", () => {
      cb(error.message);
    });
};

const getBookByISBN = (isbn, cb) => {
  const book = {};
  fs.createReadStream("./docs/books.csv")
    .pipe(parse({ delimiter: ";", from_line: 2 }))
    .on("data", (row) => {
      if (row[1] === isbn) {
        book.isbn = row[1];
        book.title = row[0];
        book.author = row[2];
        book.description = row[3];
      }
    })
    .on("end", () => {
      if (book.isbn) {
        console.log(`Book found with ISBN - ${isbn}`);
      }
      cb(null, book.isbn ? book : "Not Found");
    })
    .on("error", () => {
      cb(error.message);
    });
};

const getBooksByAuthor = (author, cb) => {
  const data = [];
  fs.createReadStream("./docs/books.csv")
    .pipe(parse({ delimiter: ";", from_line: 2 }))
    .on("data", (row) => {
      if (row[2] === author) {
        const books = {
          isbn: row[1],
          title: row[0],
          author: row[2],
          description: row[3],
        };
        data.push(books);
      }
    })
    .on("end", () => {
      cb(null, data);
    })
    .on("error", () => {
      cb(error.message);
    });
};

module.exports = {
  getBooks,
  getBookByISBN,
  getBooksByAuthor,
};
