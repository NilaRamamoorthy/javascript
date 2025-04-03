var revstr=""
function palindrome(str){
    for(i=str.length-1;i>=0;i--)
    {
revstr=revstr+str[i]
    }
      if(str===revstr)
    {
        return str+" is a Palindrome"
    }
    else{
        return str+" is not a palindrome"
    }
}

console.log(palindrome("chocolate"));
