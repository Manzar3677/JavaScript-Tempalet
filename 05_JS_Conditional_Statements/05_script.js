// If Else condition Example
var time=15;
if(time<12){
    console.log('Good Morning Manzar!!');
}
else if(time>12 && time<=16){
    console.log('Good Afternoon Manzar!!');
}
else if(time>16 && time<=24){
    console.log('Good Evining Manzar!!');
}
else{
    console.log('Enter Proper Time');
}
// For loop Example to display from 1 - 10 values
 var output="";
 for(var i=1; i<=10; i++){
     if(i<=9){
         output +=i +",";
     }
     else{
         output +=i;
     }
 }
 console.log(output);
 document.querySelector('#display').textContent = output;

// While loop Example to display from 1 - 10 values
var output="";
var i=1;
while(i<=10){
    if(i<=9){
        output += i +"-";
    }
    else{
        output +=i;
    }
    i++;
}
console.log(output);
document.querySelector('#while-loop').textContent = output;
// Do while loop Example to display from 1 - 10 values
var output="";
var i=1;
do{
    if(i<=9){
        output +=i +"*";
    }
    else{
        output +=i;
    }
    i++;
}
while(i<=10);
console.log(output);
document.querySelector('#doWhile-loop').textContent =output;

// Switch Statement Example
var today= new Date().getDay();
var actualDay='';
switch(today){
    case 0:
         actualDay='Today is : sunday';
         break;
    case 1:
         actualDay='Today is : Monday';
         break;
    case 2:
         actualDay='Today is : Tuesday';
         break;
    case 3:
         actualDay='Today is : Wednesday';
         break;
    case 4:
         actualDay='Today is : Thursday';
         break; 
    case 5:
         actualDay='Today is : Friday';
         break; 
    case 6:
         actualDay='Today is : Saturday';
         break; 
    default:
         actualDay=' I do not knows ? ';
         break;
}
console.log(actualDay);
document.querySelector('#Date').textContent = actualDay;