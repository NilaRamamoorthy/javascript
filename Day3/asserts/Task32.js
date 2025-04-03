var isLoggedIn=true
var isAdmin=false

    if (isLoggedIn) {
        console.log(" User is logged in.");
        if (isAdmin) {
            console.log(" Welcome, Admin! You have full access.");
        } 
        else {
            console.log(" Welcome, User! You have limited access.");
        }
    } 
    else {
        console.log("Access Denied! Please login to continue.");
    }


