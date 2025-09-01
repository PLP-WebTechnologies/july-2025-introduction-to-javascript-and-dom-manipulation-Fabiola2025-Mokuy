let car ={
    make: "mazda",
    model: "BT50",
    year: 2018
};
console.log(car)
let fruit = ['banana','citron','grape']
console.log(fruit)

console.log(3-2)
console.log(20/2)

//Comparison operators
console.log(5=="5")//true
console.log(3==="3")//false
console.log(9 !="9")//false

/* fontion declaration*/
function greet {
    ('Javascript is amazing');}
    greet();
   /*fonction expression*/
   let amazing()
{console.log("I so happy")}
amazing()

/* arrow function
const variableName =() =>{statements}*/
const salut = () =>{
    alert("Come back");
}
salut();
//Parameters and return values
// parameters - input
//return- output
function greetUser (name){
    alert("greetings, "+name +". Bien Venue" );
}
greetUser("Manuel Gib");
greetUser("Marcos Baie");

const square = function (num){
    return num * num;
};
console.log(square(100));
const PI = 3.14152;
let circunference = (radius) =>{
return 2 * PI * radius;}
console.log(circunference(10));

/* DOM - Document object Model*/
function maniputate(){

let body =document.getElementBYId('body');
let intro =document.getElementBYId('intro');
let ptext =document.getElementBYId('ptext');
let bnt =document.getElementBYId('bnt');
}
// begin manipulation
body.style.background = "pink";
intro.textContent = " Heading has been altered";
intro.style.color = "blue"
ptext.style.fontSise ="20px"
btn.style.boderColor ="marrow"
btn.style.boder = "35px"











