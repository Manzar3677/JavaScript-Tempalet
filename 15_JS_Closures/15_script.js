// Closures Concept of JavaScript
// Closures
var a = 10;
function greetOuter(){
    var b = 20;
    var greetInner = function(){
        var c = 30;
        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30
    };
    return greetInner;
}
function engine(fName){
    fName();
}
var greetFn = greetOuter();
engine(greetFn);



