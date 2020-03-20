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

// console.log(destrivelyRemoveLastKitten())