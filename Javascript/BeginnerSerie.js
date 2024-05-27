function getSum(a, b)
{
   if(a>0){
     return (a+b)
   }else{
    while((a) !== b){
        let sum = a+1
        if (sum === b){
            return a
        }
    }
   }
}

console.log(getSum(5,-1))