function findBookIndex(books, searchTitle) {
  let left = 0;
  let right = books.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (books[mid].title < searchTitle) {
      left = mid + 1;
    } else if (books[mid].title > searchTitle) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

let books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];
let searchBook = "The Master Mind";

console.log(findBookIndex(books, searchBook));
