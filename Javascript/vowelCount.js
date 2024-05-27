function getCount(str) {
    const vowel = /[aeiou]/g;
    if(str.match(vowel)){
      return str.match(vowel).length;
    }else return 0
}
console.log(getCount('hello'));

//return (str.match(/[aeiou]/ig || []).length);

function countvowel(str){
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    let score = 0;
    for(let i = 0; i< str.length; i++){
            if(vowel.includes(str[i])){
                score +=1
            }
    }
    return score 
}
console.log(countvowel('hyy'));