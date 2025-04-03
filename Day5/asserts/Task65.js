function callMe(callback) {
    console.log(callback());
}

function sayHello() {
    return "Hello!";
}

callMe(sayHello); 


