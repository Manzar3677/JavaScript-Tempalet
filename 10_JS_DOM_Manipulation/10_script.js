//BOM Operations

// width of the browser
 var width = window.innerWidth;
 console.log('width : ' + width + 'px');
// height of the browser
var height = window.innerHeight;
 console.log('Height : ' + height + 'px');
// Open a new Tab
  window.open('https://github.com/Manzar3677');
// print method
 function printDoc(){
    document.getElementById('hide').style.display='none';
    window.print();
    }
// DOM Properties to get body , title , URL
 var body = document.body;
 console.log(body);

 var title = document.title;
 console.log(title);

 var URL = document.URL;
 console.log(URL);
//DOM Methods
//document.getElementById();
//document.getElementsByClassName();
//document.getElementsByTagName();
//document.querySelector();
//document.querySelectorAll();

// Access and Change the Elements

// DOM Events

var h1Element = document.querySelector('#display');
h1Element.textContent = 'Good Morning';
h1Element.style.color = 'white';

var h2Element = document.querySelector('h2');
h2Element.style.background = 'forestgreen';
h2Element.style.color = 'white';
h2Element.style.boxShadow ='0 0 15px black';

//javascript event handling
var inputElement = document.querySelector('#user');
var userErrorElement = document.querySelector('#user-error');
function getUser(){
  var username = inputElement.value;
 if(username === 'manzar'){
      inputElement.style.borderColor = 'green';
      inputElement.style.backgroundColor = 'lightgreen';
      userErrorElement.textContent = 'Valid Username';
      userErrorElement.style.color = 'green';
 }
 else{
      inputElement.style.borderColor = 'red';
      inputElement.style.backgroundColor = 'lightsalmon';
      userErrorElement.textContent = 'Invalid Username';
      userErrorElement.style.color = 'red';
 }
};

// javascript event listeners

//get the element
var buttonElement = document.querySelector('#button');

// hookup an event listeners
buttonElement.addEventListener('click',function(){
  var username = inputElement.value;
  if(username === 'manzar hussain'){
       inputElement.style.borderColor = 'green';
       inputElement.style.backgroundColor = 'lightgreen';
       userErrorElement.textContent = 'Valid Username';
       userErrorElement.style.color = 'green';
  }
  else{
   inputElement.style.borderColor = 'red';
   inputElement.style.backgroundColor = 'lightsalmon';
   userErrorElement.textContent = 'Invalid Username';
       userErrorElement.style.color = 'red';
  }
 
});

//event listeners for text box element
//get the textbox element
var textBoxElement = document.querySelector('#user');

//Hookup an event linteners
textBoxElement.addEventListener('keyup',function(){
  var username = inputElement.value;
  if(username === 'manzar hussain'){
       inputElement.style.borderColor = 'green';
       inputElement.style.backgroundColor = 'lightgreen';
       userErrorElement.textContent = 'Valid Username';
       userErrorElement.style.color = 'green';
  }
  else{
   inputElement.style.borderColor = 'red';
   inputElement.style.backgroundColor = 'lightsalmon';
   userErrorElement.textContent = 'Invalid Username';
       userErrorElement.style.color = 'red';
  }
});