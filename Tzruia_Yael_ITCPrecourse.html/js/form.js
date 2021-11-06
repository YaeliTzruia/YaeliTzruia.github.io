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




