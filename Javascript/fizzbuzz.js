/* num / 3 = fizz if num /5 = buzz else return num */

const Fizzbuzz = (num) => {
    if((num % 3) === 0 && (num % 5) === 0){
        return 'FizzBuzz';
    }else if((num % 5) === 0){
        return 'Buzz';
    }else if((num % 3) === 0){
        return 'Fizz'
    }else{
        return num
    }
}
console.log(Fizzbuzz(15))


/*

const Fizzbuzz1 = (num) => {
   let result = '';

    if (num % 3 === 0) result += 'Fizz';
    if (num % 5 === 0) result += 'Buzz';

    return 'result 2 : ' + result || num;
}
console.log(Fizzbuzz1(15))
*/