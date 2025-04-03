console.log("Task25");
var product="pencil"
var quantity=13
var price=30

if(product=="pencil"&& quantity>=1){
    console.log("Product is eligible for Buy1 Get1 free");
    var a=quantity%2
    var b=quantity/2
    if (a==0) {
    console.log("Total amount: "+b*price);
    
} else {
    b=parseInt(b)
    console.log(b);
    console.log("Total amount: "+(b+1)*price);
    
}
}

