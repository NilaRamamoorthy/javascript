//Task 72
const book={
    title:"Harry Potter",
    author:"J.K.Rowling",
    price:3600

}
//Task 73
console.log(Object.keys(book));
//Task 74
console.log(Object.values(book));
//Task 75
book.genre="Fantasy";
console.log(book);
//Task 76
delete book.price
console.log(book);
//Task 77
const publisher={
    publishername:"Allen",
    location:"London"
}
Object.assign(book,publisher)
console.log(book);
//Task 78
let entry=Object.entries(book)
console.log(entry);
