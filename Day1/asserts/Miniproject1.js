var hotel="Buhari"
var orderno=2345
var fooditems=["chicken 65","mutton soup","pulav","rosemilk"]
var total=875
var isDelivered=false

console.log("Hotal Name:"+hotel);
console.log("Order Number:"+orderno);
console.log("Items Ordered:"+fooditems);
console.log("Total amount: Rs."+total);
function delivery(status){
    if(status==true)
    {
        console.log("Delivery Status: Delivered");
        
    }
    else{
        console.log("Delivery Status: Not delivered");
        
    }}
delivery(true)
var fooditems=fooditems+[,"chicken fry"]

console.log(fooditems);


