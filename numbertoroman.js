const RomanTranslationList = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

function solution(number) {
    let result = '';
  
    for (let key in RomanTranslationList) {
        while (number >= RomanTranslationList[key]) {
            result += key;
            number -= RomanTranslationList[key];
        }
    }
  
    return result;
}

// Test cases
console.log(solution(4)); // Should return 'IV'


console.log(solution(4))