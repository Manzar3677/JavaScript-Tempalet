// creation of arrays
 var array = [10,20,30,40,50,60];
 console.log(array);

// Accessing an array and its properties
   console.log(array[0]);
   console.log(array[1]);
   console.log(array[2]);
   console.log(array[3]);
   console.log(array[4]);
   console.log(array[5]);

// Access not existed property from an array
console.log(array[87]);

// adding properties to an array
  array[6] =70;
  console.log(array);

// Accessing length of an Array
   console.log('No. of Element:' + array.length);

// reverse the array using reverse()
   array = [10,20,30,40,50];
   console.log('Before Reverse :' + array);
   array.reverse();
   console.log('After  Reverse:' + array);

// Remove the first value of the array: shift()
array = [10,20,30,40,50];
console.log('Before shift :' + array);
array.shift();
console.log('After shift :' + array);

// Add value to front of the array:unshift()
array = [10,20,30,40,50];
console.log('Before unshift :' + array);
array.unshift(80,90);
console.log('After  unshift :' + array);

// Remove the last value of the array: pop()
array = [10,20,30,40,50];
console.log('Before pop :' + array);
array.pop();
console.log('After pop :' + array);

// Add value the end of the array: push()
array = [10,20,30,40,50];
console.log('Before push :' + array);
array.push(60);
console.log('After push :' + array);
// Remove an element from an Array , Arguments: colors.splice(pos,n):
array = [10,20,30,40,50];
console.log('Before splice :' + array);
array.splice(1,1);
array.splice(0,1,75);
console.log('After splice :' + array);

// Create a copy of an array. Typically assigned to a new variable:slice();
var array1 =[10,20,30,40,50];
var array2 = array1.slice();
array1.shift();
console.log(array1);
console.log(array2);

// indexOf()
array =[10,20,30,40,50];
var number = 10;
if (array.indexOf(number)===-1){
console.log('Element is not exists');
}
else{
  console.log('The element exists @Index' + array.indexOf(number));
}

// Join()
  array = [10,20,30,40,50];
  var strArray = array.join(" * ");
  console.log(strArray);

// Prove an array is an Object
  

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
