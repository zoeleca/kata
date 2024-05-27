function isPalindrome(string) {
    let str = string.toLowerCase();
//  s = s.replace(/[^a-z0-9]/gi, '')

    for(let i = 0; i< str.length /2; i++){
        if(str[i] != str[str.length -1 -i]){
            return false
        }
    }
    return true
}

const testCases = ["a", "ab ba", "", "hello my"];
for (let i = 0; i < testCases.length; i++) {
    console.log(`isPalindrome("${testCases[i]}") = ${isPalindrome(testCases[i])}`);
}
