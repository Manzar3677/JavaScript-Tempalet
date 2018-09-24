// Get the Number Element

var numberElement = document.querySelector('#number');
var displayElement = document.querySelector('#text-number');
//add an event listners

numberElement.addEventListener('keyup',function(){
        var tempStr = '';
        var str = numberElement.value;
       var array =['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
       for(var i=0; i<str.length; i++){
           var index = parseInt(str.charAt(i));
           tempStr +=array[index] + " ";
    }
    displayElement.textContent = tempStr;
});

