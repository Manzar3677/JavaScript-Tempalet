// Block scoping for FOR loop
  for(var i = 1; i<=10; i++){
      
  }
  console.log(i);
//Block scoping for if Block
var course = 'CSE'
if(course === 'CSE'){
    var job ='Software Engg';
}
console.log('Course : '+ course);
console.log('JOB : '+ job);
// Function Scoping
  function allocateJob(){
      if(course==='CSE'){
          var salary = 50000; 
        }
        console.log('Salary :' + salary);
  }
  allocateJob();
  //console.log(salary); // cannot access 'salary' because its a child scope data.

// IIFE example(Immediately invoked function expression)
// we can execute the function as soon as its declared
 var person = 'rich';
 (function(){
     if(person === 'rich'){
         var car='Range Rover';
     }
     console.log('Car :' + car);
 }) ();
 
// Read and Write Operations for variables
  
// Implications of Read and Write Operations

