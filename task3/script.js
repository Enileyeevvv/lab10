n = prompt("Введите количество пар скобок")

endArray = []

var generateParenthesis = function generation(count, A='', left = 0, right = 0){
  if (left == count && right == count){
    if (endArray.includes(A) == false){
      endArray.push(A)
    }
  }
  else {
    if (left < count){
      generation(count, A + '(', left + 1, right)
    }
    if (right < left){
      generation(count, A + ')', left, right + 1)
    }
    return endArray
  }
}

generateParenthesis(+n)

console.log(endArray)