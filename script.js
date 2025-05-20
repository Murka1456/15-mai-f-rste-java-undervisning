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
 //*sette en function med navnet ClickButton som tar en blokk 
//  med kode som skal  gjøres samtidig//
 function clickButton(){
const h1Element = document.getElementById("changeText"); 
     //document.querySelector("#changeText");
//* Lager en variabel h1Element til console for 
//* å skjekke at vi hentet riktig HTML med id-navn changeText*//
//* Logger variablen h1Element til console for å skjekke at vi henter
//*riktig 
    console.log(h1Element);
    const newText = "Velkommen til min side!";
    h1Element.textContent = newText;
    //*  Logger variablen h1Element for tekst innhold fra variabelen newText*/
 }
 //clickButton(); vi tar vekk den
 const buttonElement = document.getElementById("button");
 console.log( buttonElement);
 /*Bruker variabelen Button Element fornå legge til en hendelse lytter som */
/*??*/
 buttonElement.addEventListener("click",clickButton);
 /*function?(){
    const? = document.getElementById("?");
    const ? = "?";
    ?.textContent = ?;
 } */
 //
 //
 const addText = document.getElementById("addText");
 console.log(addText);
 addText.addEventListener("click",function(){
    console.log("Button cliked?");
 });
 /*Steg 1*/
 const reciveText = document.getElementById("reciveText");
 /*Steg 2 lag en variable som heter text med en st*/
 const text = " Det er sol i Bergen i dag"
 /*Steg 3 gjør at variable recivetext motar innholdet til text med text Content*/
 reciveText.textContent = text;

const Prosjekt = document.getElementById("Prosjekt");

Prosjekt.addEventListener("click", function(){
console.log("Button cliked?")
console.log("Prosjekt");
}
);
function clickButton ("kontakt") {
   const Kontakt = document.getElementById("chenge Text");
   Kontakt.addEventListener("copy",function(){
      console.log("kontakt");

      const newText = "finn meg på github";
      Kontakt.textContent = newText;
}
};



