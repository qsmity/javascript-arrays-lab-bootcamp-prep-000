var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
var destructivelyAppendKitten = function(name){
  return kittens.push(name)
}

var destructivelyPrependKitten = function(name){
  kittens.unshift(name)
  
}

var destrivelyRemoveLastKitten = function(){
 return kittens.pop()
}

var destrivelyRemoveFirstKitten = function(){
  return kitten.shift()
}

console.log(destrivelyRemoveLastKitten())