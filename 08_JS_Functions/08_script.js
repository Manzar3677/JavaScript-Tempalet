//creation of a simple function with no args and execute a function
function greet(){        // function declaretion / defination
    console.log('Good Morning');
}
greet(); // function call / function execute
//creation of a simple function with args
function carEngine(fuel){
    console.log('I am from carEngine & i got the fuel '  + fuel);
}
carEngine('Diesel');
carEngine('Water');
// executing a function with less number of params
 function giveMeLessGifts(chocolates,biscuits){
     console.log('Chocolates :' + chocolates + 'Biscuits :' + biscuits);
 }
 giveMeLessGifts(40);

//executing a function with more number of params
function giveMeMoreGifts(chocolates,biscuits){
    console.log('Chocolates :' + chocolates + 'Biscuits :' + biscuits);
}
giveMeMoreGifts(40,50,'gifts');

// functions with return values
 function iceCreamBox(money){
     //Preparing Ice Cream
     var iceCream = ' Ice Cream Rs: ' + money;
     return iceCream;
 }
  var cone = iceCreamBox(50);
 console.log(cone);
//function with empty return /no return
function iceCreamBox2(money){
    //Preparing Ice Cream
var iceCream = ' Ice Cream Rs: ' + money;
}
var cone2 = iceCreamBox2(50);
console.log(cone2);

// function Expressions with name and execution
var greetFn = function(){
    console.log(' I am Greetfn Function Expreesion');
}
greetFn();


// Functions as arguments without args
 function greet1(name){
     console.log('I am From Greet 1 ' + name);
 }
 function greet2(name){
    console.log('I am From Greet 2 ' + name);
}
function greetEngine(fName, name){
    fName(name);
}
greetEngine(greet1,'Manzar');
greetEngine(greet2,'Hussain');

// Functions in Objects and Execution
   var student = {
       firstName : 'Manzar',
       lastName : 'Hussain',
       fullName : function(){
           console.log(this.firstName + " " + this.lastName);
       }
   };
 console.log(student.fullName());


// Coding Exercise 1
 var employee = {
     name :'Manzar',
     age :23,
     desg : 'Engineer',
     address :{
        city:  'Hyderabad',
        state : 'Telangana',
        country:'India'
     },
     isFromState : function(state) {
         return employee.address.state===state;
     },
     isFromState : function(city) {
        return employee.address.city===city;
    },
    isFromState : function(country) {
        return employee.address.country===country;
    }
 };
 console.log('is From Telangana :' + employee.isFromState('Telangana'));
 console.log('is From Hyderabad :' + employee.isFromState('Hyderabad'));
 console.log('is From India :' + employee.isFromState('India'));



// Default Function Arguments (arguments)
function defaultArgs(){
    console.log(arguments);
}
defaultArgs('manar',23,'engineer');