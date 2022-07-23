const { read } = require("fs");
const inventory = require("./inventory");
const readline = require("readline-sync");
const add = require("./addBooksMagazines");

console.clear();
console.log("Welcome to Library\n\nSelect an option:\t");
console.log(`
1. Get all authors
2. Get all books
3. Get all magazines
4. Find book by ISBN number
5. Find magazine by ISBN nymber
6. Find book/magazine by an author
7. Get all books/magazines sorted by title
8. Add a book
9. Add a magazine

To quit press 0 and enter
`);

const addBookForm = () => {
  console.log("Enter book title\n");
  var title = readline.question();
  console.log("Enter book ISBN number\n");
  var isbn = readline.question();
  console.log("Enter book author\n");
  var author = readline.question();
  console.log("Enter book description\n");
  var desc = readline.question();
  var book = {
    title: title,
    isbn: isbn,
    author: author,
    description: desc,
  };
  add.addBook(book);
};

const addMagazineForm = () => {
  console.log("Enter magazine title\n");
  var title = readline.question();
  console.log("Enter magazine ISBN number\n");
  var isbn = readline.question();
  console.log("Enter magazine author\n");
  var author = readline.question();
  console.log("Enter magazine published date\n");
  var date = readline.question();
  var magazine = {
    title: title,
    isbn: isbn,
    author: author,
    published: date,
  };
  add.addMagazine(magazine);
};

let choice = Number(readline.question());
switch (choice) {
  case 1:
    console.clear();
    console.log("\nAuthor Details: \n");
    inventory.getAuthors();
    break;
  case 2:
    console.clear();
    console.log("Book Details: \n");
    inventory.getBooks();
    break;
  case 3:
    console.clear();
    console.log("Magazine Details: \n");
    inventory.getMagazine();
    break;
  case 4:
    console.clear();
    console.log("\nEnter Book ISBN number:\n");
    var isbn = readline.question();
    inventory.getBookByIsbn(isbn);
    break;
  case 5:
    console.clear();
    console.log("\nEnter Magazine ISBN number:\n");
    var isbn = readline.question();
    inventory.getMagazineByIsbn(isbn);
    break;
  case 6:
    console.clear();
    console.log("\nFind book/magazine by author:\n");
    var author = readline.question();
    inventory.getAuthorPublished(author);
    break;
  case 8:
    console.clear();
    console.log("\nAdd Book:\n");
    addBookForm();
    break;
  case 9:
    console.clear();
    console.log("\nAdd Magazine:\n");
    addMagazineForm();
    break;
  default:
}
