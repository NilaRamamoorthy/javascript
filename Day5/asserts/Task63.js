var count=0
function vowel(vow)
{
for(i=0;i<=vow.length;i++)
{
    if(vow[i]=='a'|| vow[i]=='e' ||vow[i]=='i'||vow[i]=='o'||vow[i]=='u'){
        count=count+1
    }

}
return count
}
console.log(vowel("happiness"));
