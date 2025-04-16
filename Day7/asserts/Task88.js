function Book(title,author,price)
{
    this.title=title;
    this.author=author;
    this.price=price;
}

const books=[
  new Book("The Alchemist", "Paulo Coelho", 250),
  new Book("1984", "George Orwell", 180),
  new Book("Clean Code", "Robert C. Martin", 350),
  new Book("To Kill a Mockingbird", "Harper Lee", 200)
];

let filter=books.filter((val)=>val.price<=300)

filter.forEach(book => {
    console.log(`${book.title} by ${book.author} - ₹${book.price}`);
  });