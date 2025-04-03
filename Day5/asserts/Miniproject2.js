var myarr=["apple","orange","grapes","banana","strawberry","brocoli","potato"]
function display(arr)
{
    for(i=0;i<=arr.length-1;i++)
    {
    console.log(arr[i]);
    }
}
   function add(arr, fruit) {
    arr.push(fruit); 
    display(arr)
}

function del(fru){
for(i=0;i<=myarr.length-1;i++)
{
    if(myarr[i]===fru)
    {
        delete(myarr[i])
        var count=1
        continue
    }
    
    else{
        console.log(myarr[i]);
        
    }
}

}
var input=prompt("Enter 1 for add,2 for display, 3 for delete")
if(input==1){
    var fruit=prompt("Enter an item to add to the list")
    add(myarr,fruit);
    
}
if(input==2){
    display();
    
}
if(input==3){
    var fru=prompt("Enter an item to delete from grocery list")
    del(fru);
    if(count!==0){
    console.log("The item you entered is not in the list");
    
}
}