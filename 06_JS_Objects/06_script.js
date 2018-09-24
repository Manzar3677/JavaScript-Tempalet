//creation of objects , adding properties ,  retrieval
var fridge = {};
fridge.eggs = 40;
fridge.fruits = 20;
fridge.milk = 5;
console.log(fridge);
console.log('Eggs : ' + fridge.eggs);
console.log('Fruits : ' + fridge.fruits);
console.log('Milk : ' + fridge.milk);

//declaring Object Literals
 var mobile = {
     color: 'Black',
     company : 'Lenovo',
     RAM : '2GB',
     capacity : '16GB'
 };
 console.log(mobile);
 console.log('Compant Name :' + mobile.company);

//Access Non Existing Properties 
 console.log('Mobile Screen Size:' + mobile.screen);

// Usage of Dot and [] notations
console.log('Compant Name :' + mobile.capacity);
console.log('Compant Name :' + mobile['capacity']);

// use of [] notation for accessing dynamic properties
var prop = 'capacity';
console.log( 'Mobile prop:' + mobile[prop]); //16GB
var prop = 'color';
console.log( 'Mobile prop:' + mobile[prop]); 

// nested Objects creation
  var car = {
      model : 'Benz',
      color : 'white',
      year :   2018,
      features : {
          airbags : true,
          fogLamps : true,
          fuel : 'Diesel',
          mileage : '8kmph'
      }
  };
  console.log(car);
  console.log(car.features);

// deleting a property from an object
   delete car.features.mileage;
   console.log(car.features);
