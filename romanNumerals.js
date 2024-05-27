const RomanTranslationList = {
    I : 1,
    IV : 4,
    V : 5,
    IX : 9,
    X : 10, 
    XL : 40,
    L : 50, 
    XC : 900,
    C : 100,
    CD : 400,
    D : 500,
    CM : 900,
    M : 1000
}

const numberTranslation = (romNumb) => {
    let letters = (romNumb.toUpperCase()).match(/IV|IX|XL|XC|CD|CM|\w/g); 
    let result = 0

    letters.forEach(letter => {
        result += RomanTranslationList[letter]
    });
    return result
}

console.log(numberTranslation('MMxLIX'))

//understanding of match

/*Matching Words in a String:
Write a function that takes a string as input and returns an array of all words 
(sequences of characters separated by spaces) in the string.*/

const matchWords = (string) =>{
    let regex = /\w+/g; //match one or more word characters 
    let tab = []
    let words = (string.toLowerCase()).match(regex)
    if (words){
        tab.push(...words) //push individual words into the array
    }
    return tab
}
console.log(matchWords('hello world, joy is speaking'))