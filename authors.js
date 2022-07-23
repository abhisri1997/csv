const fs = require("fs");
const { parse } = require("csv-parse");

const data = [];

const getAuthor = (cb) => {
  fs.createReadStream("./docs/authors.csv")
    .pipe(parse({ delimiter: ";", from_line: 2 }))
    .on("data", (row) => {
      const author = {
        email: row[0],
        first_name: row[1],
        last_name: row[2],
      };
      data.push(author);
    })
    .on("end", () => {
      cb(null, data);
    })
    .on("error", () => {
      cb(error.message);
    });
};

module.exports = {
  getAuthor,
};
