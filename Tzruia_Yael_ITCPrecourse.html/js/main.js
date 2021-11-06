//this is the language footer! :D

const language = document.querySelector('codingLanguage');

const codingLanguage=["HTML","CSS","JavaScript"]; 

console.log(codingLanguage)

codingLanguage.splice(2, 0, 'and')


 const sentence =`This page was built using: ${codingLanguage}`;

console.log(sentence);

let desiredData = replaceCommaLine(sentence);
function replaceCommaLine(data) {
    
let dataToArray = data.split(',');
    
return dataToArray.join(' ');
}

console.log(desiredData);

const newData = document.getElementById('languages').innerHTML = desiredData


//name from GitHub



//trying to read the ,
/*
let desiredData2 = 0;
for (let i=0; i < codingLanguage.length;i++){
  console.log(codingLanguage[i]);
  codingLanguage.slice(i,0,',');
  */


//left to do: add the comma back and make sure it's modyfied so. that more languages can be added. 


//try to make a if or else statement in order to be able to add languages without moving and

console.log(desiredData);

fetch(desiredData)
.then(function(response) {
 return response.json(); 
})
.then(function (data){
 const footer = document.createElement('footer')

document.querySelector('.footer3').appendChild(footer);

})

//trying to read the ,
/*
let desiredData2 = 0;
for (let i=0; i < codingLanguage.length;i++){
  console.log(codingLanguage[i]);
  codingLanguage.slice(i,0,',');
  */


//left to do: add the comma back and make sure it's modyfied so. that more languages can be added. And add in HTML. 


//try to make a if or else statement in order to be able to add languages without moving and

