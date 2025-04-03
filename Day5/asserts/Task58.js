function largest(a,b,c){
    if(a>b)
    {
        if(a>c)
        {
            return a
        }
        else{
            return c
        }
    }
    else{
        if(b>c){
            return b
        }
        else{
            return c
        }
    }
}

console.log(largest(2,13,4));
