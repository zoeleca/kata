/*
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then 
it should replace the missing second character of the final pair with an underscore ('_').
*/

//first function 
function solution(str) {
  const tab = str.split("")
  let result = []
  if (str.length % 2 == 0) {
    for (let i = 0; i < tab.length; i++) {
      result.push(tab[i] + tab[i + 1])
      i++
    }
    return result
  } else {
    tab.push("_")
    for (let i = 0; i < tab.length; i++) {
      result.push(tab[i] + tab[i + 1])
      i++
    }
    return result
  }
}


//refactored function 
function solutionRefactored(str) {
  const tab = str.split("")
  let result = []

  if (tab.length % 2 !== 0) {
    tab.push("_")
  }
  for (let i = 0; i < tab.length; i++) {
    result.push(tab[i] + tab[i + 1])
    i++
  }
  return result
}

console.log(solution("abcdef"));

console.log(solutionRefactored("abcdefg"));