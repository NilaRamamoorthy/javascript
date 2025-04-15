function Book(title, author) {
    this.title = title;
    this.author = author;
  }
  
  function createBook(title, author) {
    const book = new Book(title, author); 
    return book;
  }
 
  const myBook = createBook("Harry potter", "J.K.Rowling");

  console.log(myBook);
  