var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
var destructivelyAppendKitten = function(name){
  return kittens.push(name)
}

var destructivelyPrependKitten = function(name){
  return kittens.unshift(name)
  
}

var destructivelyRemoveLastKitten = function(){
 kittens.pop()
 
}

var destructivelyRemoveFirstKitten = function(){
  return kittens.shift()
}

var appendKitten = function(name){
  return kittens.concat(name)
}

var prependKitten = function(name){
  kittens = [name, ...kittens]
  return kittens
}
// console.log(destrivelyRemoveLastKitten())
// console.log(prependKitten("harvey"))