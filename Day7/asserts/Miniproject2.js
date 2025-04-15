function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
}
const library=[];
    
function addBook(title,author,year){
    const newBook=new Book(title,author,year)
    library.push(newBook)
}

function displayBook(){
    library.forEach(val=> console.log(`Book: ${val.title} Author: ${val.author} Year: ${val.year}`));
   
    
}
function searchBook(title) {
    const result = library.filter(book =>
      book.title.toLowerCase().includes(title.toLowerCase()));
  
      console.log("Search Results:");
      result.forEach(book => {
        console.log(`${book.title} by ${book.author} (${book.year})`);
      });
    }
  

addBook("The Hobbit", "J.R.R. Tolkien", 1937);
addBook("Harry Potter", "J.K. Rowling", 1997);
addBook("The Alchemist", "Paulo Coelho", 1988);
displayBook();
searchBook("Hobbit");