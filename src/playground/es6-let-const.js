var nameVar = "Balogun";
var nameVar = "jamiu";
console.log('nameVar', nameVar)

let nameLet = "ola";
 nameLet = 'temi';
console.log('nameLet', nameLet)

const nameConst = "Andrew";
console.log('nameConst', nameConst)

//Blocking 
var fullname = 'Oladipupo jamiu';
let firstName;
if(fullname){
    firstName = fullname.split(' ')[0];
    console.log(firstName)
}
console.log(firstName)