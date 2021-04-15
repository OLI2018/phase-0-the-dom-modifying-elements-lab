// Write your code here!
const mainElement = document.getElementById("main");
mainElement.remove(); 

const newHeader= document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id='victory';

newHeader.innerHTML="<h1>Saloni is the champion </h1>"
newHeader.style.backgroundColor='#27647b';