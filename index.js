var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
var destructivelyAppendKitten = function(name){
  return kittens.push(name)
}

var destructivelyPrependKitten = function(name){
  kittens.unshift(name)
  
}

var destrivelyRemoveLastKitten = function(name){
 return  kittens.shift(name)
}

console.log(destrivelyRemoveLastKitten("lex"))