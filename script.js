function numberOfBooksRead(library) {
  // Initialize a count for the number of books read
  let count = 0;

  // Iterate through the library's books array
  for (let i = 0; i < library.length; i++) {
    // Check if the readingStatus is true, indicating the book has been read
    if (library[i].readingStatus === true) {
      count++;
    }
  }

  // Return the count of books that have been read
  return count;
}

// Example usage:
const library = [
  {
    author: 'Author1',
    title: 'Book1',
    readingStatus: true,
  },
  {
    author: 'Author2',
    title: 'Book2',
    readingStatus: false,
  },
  {
    author: 'Author3',
    title: 'Book3',
    readingStatus: true,
  }
];

const numberOfReadBooks = numberOfBooksRead(library);
console.log(numberOfReadBooks); // Output: 2

