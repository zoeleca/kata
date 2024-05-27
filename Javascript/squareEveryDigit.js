function squareDigits(num){
    let tab = num.toString().split('');
    let newtab = []
    for(let i = 0; i< tab.length; i++){
        let square = (tab[i]*tab[i])
        newtab.push(square)
    }
    return parseInt(newtab.join(''))
  }

  console.log(squareDigits(0))


  /*
  let string = num.toString(); 
  let result = []
  for(let i = 0; i<string.length; i++){
    result[i]= string[i]*string[i]
  }
  return Number(result.join(''))
  */

let squareNumber = (num) =>{
    let result = num
    .toString()
    .split('')
    .map(num => parseInt(num))
    .map( num => num*num)
    .join('')

    return parseInt(result)
}
console.log(squareNumber(4141))