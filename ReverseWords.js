function reverseWords(str) {
    /*separate str in words 
    for each word change the order of the index 
    return the words combine 
    */
    const words = str.split(" ")
    const reverseWord = []
    for(let i=0; i<words.length; i++){
     const word = words[i];
     let reversedWord = '';
         for(let j=word.length -1; j>=0; j--){
           reversedWord += word[j]
         }
         reverseWord.push(reversedWord)
        }
       return reverseWord.join(' ')
    }
console.log(reverseWords("This is an example!"))

/*
function reverseWords(str) {
    // Go for it
    //split words into seperate arrays
    return str.split("").reverse().join("").split(' ').reverse().join(' ');
  }
console.log(reverseWords("This is an example!"))
*/