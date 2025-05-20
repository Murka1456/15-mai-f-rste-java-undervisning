console.log("Hello World!");
let userName = "JUlie";
console.log(userName);
userName = "Julius";
console.log(userName);
let userAge =28;
console.log(userAge);
let userPresent =true;
console.log(userPresent);
const firstName = "Julie";
const lastName = "Hauge";
const fullName = firstName + "" + lastName + "";
const wholeName = `${firstName} ${lastName}!`;
console.log(fullName);
console.log(wholeName);
function bussinessCard(){
const firstName = "Julie";
console.log(firstName);

}
bussinessCard();
//Regular function
function hellowFunction(){
    console.log("Hellow from inside function");
} 
 hellowFunction();
 //
 //
 function clickButton(){
    const h1Element = document.getElementById("changeText"); 
     //document.querySelector("#changeText");
     console.log(h1Element);
    const newText = "Velkommen til min side!";
    h1Element.textContent = newText;
 }
 clickButton();
