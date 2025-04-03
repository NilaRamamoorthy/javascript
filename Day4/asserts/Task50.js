var word=prompt("Enter a word for reversal: ")
 var reversed="";
for(i=word.length-1;i>=0;i--)
{
   reversed=reversed+word[i]
   
}
console.log(reversed);
