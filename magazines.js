const fs = require("fs");
const { parse } = require("csv-parse");

const data = [];
const magazine = {};

const getMagazine = (cb) => {
  fs.createReadStream("./docs/magazines.csv")
    .pipe(parse({ delimiter: ";", from_line: 2 }))
    .on("data", (row) => {
      const magazine = {
        isbn: row[1],
        title: row[0],
        author: row[2],
        published: row[3],
      };
      data.push(magazine);
    })
    .on("end", () => {
      cb(null, data);
    })
    .on("error", () => {
      cb(error.message);
    });
};

const getMagazineByISBN = (isbn, cb) => {
  fs.createReadStream("./docs/magazines.csv")
    .pipe(parse({ delimiter: ";", from_line: 2 }))
    .on("data", (row) => {
      if (row[1] === isbn) {
        magazine.isbn = row[1];
        magazine.title = row[0];
        magazine.author = row[2];
        magazine.published = row[3];
      }
    })
    .on("end", () => {
      if (magazine.isbn) {
        console.log(`Magazine found with ISBN - ${isbn}`);
      }
      cb(null, magazine.isbn ? magazine : "Not Found");
    })
    .on("error", () => {
      cb(error.message);
    });
};

const getMagazineByAuthor = (author, cb) => {
  const data = [];
  fs.createReadStream("./docs/magazines.csv")
    .pipe(parse({ delimiter: ";", from_line: 2 }))
    .on("data", (row) => {
      if (row[2] === author) {
        const magazine = {
          isbn: row[1],
          title: row[0],
          author: row[2],
          published: row[3],
        };
        data.push(magazine);
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
  getMagazine,
  getMagazineByISBN,
  getMagazineByAuthor,
};
