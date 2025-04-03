var arr=[10,20,30,40,50,60,70,80,90,100]
var revarr=[]
function revarray(){
for(i=arr.length-1;i>=0;i--)
{
    revarr=revarr+arr[i]+" "

}
return revarr
}
console.log(revarray());

