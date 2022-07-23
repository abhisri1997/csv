const fs = require("fs");
const { stringify } = require("csv-stringify");
const book_location = "./docs/new_books.csv";
const magazine_location = "./docs/new_magazines.csv";

const book_columns = ["Title", "isbn", "authors", "description"];
const magazine_columns = ["Title", "isbn", "authors", "published At"];

let book_stringifier = stringify({ header: true, columns: book_columns });
let magazine_stringifier = stringify({
  header: true,
  columns: magazine_columns,
});

const addBook = (book) => {
  if (fs.existsSync(book_location)) {
    const stat = fs.statSync(book_location);
    if (stat.size === 0) {
      book_stringifier = stringify({ header: true, columns: book_columns });
    } else {
      book_stringifier = stringify({ header: false, columns: book_columns });
    }
  }
  const writableStream = fs.createWriteStream(book_location, { flags: "a" });
  console.log(book);
  const { title, isbn, author, description } = book;
  const query = [title, isbn, author, description];
  book_stringifier.write(query);
  book_stringifier.pipe(writableStream);
};

const addMagazine = (magazine) => {
  if (fs.existsSync(magazine_location)) {
    const stat = fs.statSync(magazine_location);
    if (stat.size === 0) {
      magazine_stringifier = stringify({ header: true, columns: book_columns });
    } else {
      magazine_stringifier = stringify({
        header: false,
        columns: book_columns,
      });
    }
  }
  const writableStream = fs.createWriteStream(magazine_location, {
    flags: "a",
  });
  const { title, isbn, author, published } = magazine;
  const query = [title, isbn, author, published];
  magazine_stringifier.write(query);
  magazine_stringifier.pipe(writableStream);
};

module.exports = {
  addBook,
  addMagazine,
};
