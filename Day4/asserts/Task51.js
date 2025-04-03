var vword=prompt("Enter word for vowel count: ")
var vcount=0
for(i=0;i<vword.length;i++){
    
    if(vword[i]=='a'||vword[i]=='e'||vword[i]=='i'||vword[i]=='o'||vword[i]=='u'){
vcount++
    }

}
console.log("Number of vowels in the given word: "+vcount);
