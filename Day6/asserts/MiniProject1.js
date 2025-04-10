const movieName=["Vikram","Ayan","Beast","3"]
let userMovie=prompt("Enter a movie name")
let isAvailable=movieName.some(val=>val==userMovie)
if(isAvailable)
{
    console.log("Ticket Booked");
    
}
else{
    console.log("Movie not available");
    
}
