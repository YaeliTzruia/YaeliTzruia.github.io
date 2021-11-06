//Map

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const mapDiv = document.querySelectorAll('.map');
let currentlySelected = 0;


prevBtn.addEventListener('click', function(){

mapDiv[currentlySelected].classList.remove("active");
currentlySelected--;
mapDiv[currentlySelected].classList.add('active');
nextBtn.disabled = false;

if (currentlySelected===0){
    prevBtn.disabled=true
}

});

nextBtn.addEventListener('click',function() {


/*this line hides the latest pic when click next or prev*/  
mapDiv[currentlySelected].classList.remove("active");
/*This line adds another pic*/ 
currentlySelected++;
mapDiv[currentlySelected].classList.add("active");
prevBtn.disabled = false;

if (mapDiv.length === currentlySelected + 1){
nextBtn.disabled = true;
}
});





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