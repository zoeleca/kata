function filter_list(l) {
  let result = []
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] !== 'string') {
      console.log(l[i])
      console.log(i)
      result.push(l[i])
      i++
    }
    i++
  }
  return result
}
console.log(filter_list([1, 'b', 2, 'a', 'd'])) //== [1,2]