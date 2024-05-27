function longestConsec(strarr, k) {
    let len = strarr.length;
    let longestWord = "";

    if (k === 0 || k > len){
        return  longestWord;
     }
     
     for (let i = 0; i <= len - k; i++) {
        let currentString = '';
        for(let j =0; j<k; j++){
            currentString += strarr[i +j];
        }
        if (currentString.length > longestWord.length){
            longestWord =  currentString;
        }
    }
    return longestWord
}



//console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1));
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3))




/*
function longestConsec(strarr, k) {
    let len = strarr.length;
    let newString = "";
    let oldString = '';
    let newScore = 0;
    let prevScore = 0;
    let longestWord = "";
    for (let i = 0; i < len; i++) {
        //console.log('len =' + len-1);
        console.log('i =' +  i)
        for( let n = k; n >0; n--){
            if (i === 0) {
                oldString = strarr[0] + n * (strarr[i - n])
                prevScore = ((oldString).length)
                console.log('if i = 0 old string :' + oldString)
                //console.log('if i = 0 prev score =' + prevScore)
            } else if (i === (len-1)){
                oldString = (strarr[i - (n-2)]) + n * (strarr[i - (n-1)])
                newString = (strarr[i - (n-1)]) + n * (strarr[i - n]);
                prevScore = oldString.length;
                newScore = newString.length;
                return longestWord
            }else{
                oldString = (strarr[i - (n-1)]) + n * (strarr[i - n])
                newString = (strarr[i +n ]) + n * (strarr[i + (n+1)]);
                prevScore = (oldString.length);
                newScore = newString.length;
                console.log('else oldString :' + oldString)
                console.log('else newString :' + newString)
                //console.log('else prev score =' + prevScore)
                //console.log('else next score = ' + newScore)
                
            }
        }
        if (prevScore > newScore) {
            longestWord = oldString;
            //console.log('longestWord =' + longestWord);           
        } else {
            longestWord = newString;
            //console.log('longestWord =' + longestWord)
        }
    }
}

const tab = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
console.log(longestConsec(tab,3)); */