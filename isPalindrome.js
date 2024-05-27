function isPalindrome(st){
    let reverseString = st.split('').reverse().join('')
    if(reverseString === st){
        return true;
    }else return false;
}


function solve(str) {
    const len = str.length;
    for (let i = 0; i < (len / 2); i++) {
        // console.log('string i = ' + str[i])
        // console.log('string rev = ' + str[len - 1 - i])
        if (str[i] !== str[len - 1 - i]) {
            return false
        }
    }
    return true
}

function isRotationPalindrome(str){
    if(!str || str.length <=1){
        return false
    }
    for (let i = 0; i < (str.length / 2); i++) {
        const rotated = str.slice(i) + str.slice(0,i)
        if(solve(rotated)){
            return true 
        }
    } 
    return false 
}


console.log('test 1 : ' + isRotationPalindrome('aaab'))
console.log('test 2 : ' + isRotationPalindrome('4455'))