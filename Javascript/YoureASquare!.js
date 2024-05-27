var isSquare = function (n) {
    if (!(Number).isInteger(Math.sqrt(n))){
         return false 
        }else return true;
}
console.log(isSquare(2))

/*
var isSquare = function (n) {
    if(Math.sqrt(n) % 1 === 0){return true}else return false
}
console.log(isSquare(4)
*/