var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
var destructivelyAppendKitten = function(name){
  return kittens.push(name)
}

var destructivelyPrependKitten = function(name){
  return kittens.unshift(name)
  
}

var destrivelyRemoveLastKitten = function(){
 const kit = kittens.pop()
 return kit
}

var destrivelyRemoveFirstKitten = function(){
  return kittens.shift()
}

// console.log(destrivelyRemoveLastKitten())