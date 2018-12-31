function concat(array1, array2){
var totalarray = array1
for (var i = 0; i < array2.length; i++) {
  totalarray.push(array2[i])
}
return totalarray

function merge(array1,array2) {
  return concat(array1,array2).sort()
}
}