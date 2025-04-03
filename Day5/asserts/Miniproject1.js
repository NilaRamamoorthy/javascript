
function grad(avg) {
    if (avg>= 90) {
        console.log("Grade: A");
    }
    if (avg>= 75 && avg<= 89) {
        console.log("Grade: B");

    }
    if (avg>= 50 && avg<= 74) {
        console.log("Grade: C");

    }
    if(avg<50){
        console.log("Grade: F");
        
    }

}
function avg(sum) {
    var avg = sum / 6
    console.log("Average Mark: " + avg);
    grad(avg)
}

(function enter() {
    

  var mark=0
  var sum=0
    for (i = 0; i <= 5; i++) {
        sub_mark = prompt("Enter mark for subject "+(i+1) );
        mark=parseInt(sub_mark)
        sum +=mark;
    }   
    console.log("Total Marks: "+sum);
   avg(sum)
})();

   
   




