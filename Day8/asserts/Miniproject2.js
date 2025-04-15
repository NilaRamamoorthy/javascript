let word=prompt("Enter a Word");
let cleanWord=word.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
let revWord=cleanWord.split('').reverse().join('');
if(cleanWord==revWord)
{
    console.log(word+" is a Palindrome");
    
}
else{
    console.log(word+" is not a Palindrome");
    
}