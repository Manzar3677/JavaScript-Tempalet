// Assignment operator =
var fileName = 'operators';
console.log('fileName :' + fileName);

// Arithmetic operators + - * /
  var a = 10;
  var b = 20;
  var sum = a+b;
  console.log('The sum of a, b is :' + sum);

// Short hand math += , -= , *= , /=
   var p = 10;
   var q = 20;
   var add =0;
   add = add + (p+q);// 0+10+20=30
   add += (p+q);//30+10+20=60
   console.log(add); //60

// Conditional operators < , > , <= , >= , !=
   var age = 25;
   if(age < 18){
       console.log('You are minor');
   }
   else{
       console.log('You are Major');
   }

// Unary Operator ++ , -- (pre , post)
   a=10;
   a=a+1;//11
   a+=1;//12
   a++;//13
   console.log('The value of a:'+a);

// Logical operators AND , OR
   var inRelation=true;
   var parentsAgreed=false;
   if(inRelation && parentsAgreed){
       console.log('Get Marry Soon');
   }
   else{
       console.log('Wait until the parents Agreed');
   }

// String Concatenation Operator
  var Str = 10 + 20 + '20' + 40 + 20;
  console.log(Str);

// Ternary operator (? :)
    age=25;
    (age<18) ? console.log('you are Minor') : console.log('you are Major');

// Type of operator
       var abc;
       console.log('value:'+abc+ 'data type:' +typeof abc);
       abc=10;
       console.log('value:'+abc+ 'data type:' +typeof abc);
       abc='text';
       console.log('value:'+abc+ 'data type:' +typeof abc);
       abc=true;
       console.log('value:'+abc+ 'data type:' +typeof abc);
       abc=null;
       console.log('value:'+abc+ 'data type:' +typeof abc);
// == operator
   a=10;
   b="10";
   if(a==b){
       console.log('Both are equal');
   }
   else{
       console.log('Both are not equal');
   }

// === operator
a=10;
b="10";
if(a===b){
    console.log('Both are equal');
}
else{
    console.log('Both are not equal');
}

