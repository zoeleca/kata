alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",")
function isPangram(string){
   if(alphabet.every(x => string.includes(x))){
    return true
   }else{
    return false
   }
}

console.log(isPangram('azerrt yuiiopmlkjnh gbfvdcsxqw'))