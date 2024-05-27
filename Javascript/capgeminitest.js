function isProdWinner(inputArr) { 
  /*if the is two int in tab and a*b > Sum(tab[allnumber]*2)
  return true  else return false 
  */
 let numMultiplied = 0;
 let numSum =0
 for(let i =0; i<inputArr.length; i++){
   numSum += inputArr[i];
   numMultiplied = inputArr[0]* inputArr[1]
 }
 if(numMultiplied > (numSum *2)){
   return true
 }else return false
}

console.log(isProdWinner([1,-2,-4]))