/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
  var piValue = Math.PI;
  console.log('piValue :' + piValue);
// Math sqrt
  var sqrt = Math.sqrt(144);
  console.log('sqrt of 144 :' + sqrt);
// find the min of 4 numbers
  var  min = Math.min(10,30,44,33,89,73876,89,098,756,876,786);
  console.log('Min Value :' + min);
// find the Max of 4 numbers
var  max = Math.max(10,30,44,33,89,73876,89,098,756,876,786);
  console.log('Max Value :' + max);
// find the 'x' to the power of 'y' value, ex: 2^4
 var pow = Math.pow(2,4);
 console.log('2 ^ 4 is :' + pow);
// generate the random numbers from 0 to 100
 var random = (Math.round(Math.random()*100000)).toString();
 console.log(random);
 document.querySelector('#display').textContent = random;

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
    var today = new Date();
    console.log(today);
// Get proper date
  function leadingZero(time){
      if(time <= 9){
          return '0' + time;
      }
      else{
          return time;
      }
  }
  var date = today.getDate() + '-' +  leadingZero(today.getMonth()+1) + '-' + today.getFullYear();
  console.log(date);

// get full day of the week using switch statement
var day= new Date().getDay();
var actualDay='';
switch(day){
    case 0:
         actualDay='sunday';
         break;
    case 1:
         actualDay='Monday';
         break;
    case 2:
         actualDay='Tuesday';
         break;
    case 3:
         actualDay='Wednesday';
         break;
    case 4:
         actualDay='Thursday';
         break; 
    case 5:
         actualDay='Friday';
         break; 
    case 6:
         actualDay='Saturday';
         break; 
    default:
         actualDay=' I do not knows ? ';
         break;
}
console.log('Today is :'+ actualDay);

// Display a Digital Clock on the web page
   function indianClock(){
       var today = new Date();
       var options =  {timeZone : 'Asia/Kolkata'};
       var time = today.toLocaleTimeString('en-US',options);
       document.querySelector('#clock').textContent = time;
   }
   setInterval(indianClock,1000);

/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */
   var num1 = 123;
   console.log('Value :' + num1 + 'Type :' + typeof num1);

   //convert to string
   var strNum = num1.toString();
   console.log('Value :' + strNum + 'Type :' + typeof strNum);

   //convert to Number
   var num2 = parseInt(strNum);
   console.log('Value :' + num2 + 'Type :' + typeof num2);

   //display currency value
   var num3 = 5000;
   var currency = num3.toFixed(2);
   console.log('Currency $ :' +currency);

/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */

 var greet = "Good Morning";

 //to lowercase
 console.log(greet.toLowerCase());

 // to uppercase
 console.log(greet.toUpperCase());

 //count the number of '0'

 var str = "Good Morning";
 function countZeros(str){
     var temp = 0;
     for(var i=0; i<str.length; i++){
         var ch = str.charAt(i);
         if(ch==='o'){
             temp++;
         }
        }
     return temp;
    
 }
 var zeros = countZeros(str);
 console.log('Count :' + zeros);

 // to reverse the string
 str = 'Good Morning';
 function reverseStr(){
   var temp='';
   for(var i = str.length-1; i>=0; i--)
{
    temp +=str.charAt(i);
} 
return temp;
 }
 var revStr = reverseStr(str);
 console.log('revStr :' + revStr);

 // GET SRTING FORMAT OF NUMBER
 var someNumber = '0123';
 function getStrNumber(str){
    var temp ='';
    var strNumber = str.toString();
    for(var i=0; i<strNumber.length; i++){
var ch=parseInt(strNumber.charAt(i));
    switch(ch){
        case 0: 
        temp += 'ZERO';
        break;
        case 1: 
        temp += 'ONE';
        break;
        case 2: 
        temp += 'TWO';
        break;
        case 3: 
        temp += 'THREE';
        break;
        case 4: 
        temp += 'FOUR';
        break;
        case 5: 
        temp += 'FIVE';
        break;
        case 6: 
        temp += 'SIX';
        break;
        case 7: 
        temp += 'SEVEN';
        break;
        case 8: 
        temp += 'EIGHT';
        break;
        case 9: 
        temp += 'NINE';
        break;
        default: 
        temp += '';
        break;
    }
    }
    return temp;
 }
 var strNumber = getStrNumber(someNumber);
 console.log(strNumber);

 //hjgkghjk
 var myNumber = '123';
 function displayStrNumber(str){
     var tempStr = '';
    var array =['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
    for(var i=0; i<str.length; i++){
        var index = parseInt(str.charAt(i));
        tempStr +=array[index] + " ";
 }
 return tempStr;
}
 strNumber = displayStrNumber(myNumber);
 console.log(strNumber);

 //Palinndrome Program

 var firstStr = 'BABCBAB';
 function isParlidrome(firstStr){
     for (var i=firstStr.length-1; i>0; i--){
         revStr +=firstStr.charAt(i);
     }
     if(firstStr === revStr){
         return 'It is a Palindrome String';
     }
     else{
         return 'It is not a Palindrome String';
     }
 }
 output = isParlidrome(firstStr);
 console.log(output);