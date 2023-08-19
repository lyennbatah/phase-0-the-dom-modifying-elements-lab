// 1) Remove the DOM node 'main#main' if it exists
const mainNode = document.querySelector('main#main');
if (mainNode) {
    mainNode.remove();
}

// 2) Create a new <h1> node
const newHeader = document.createElement('h1');

// 3) Set the 'id' attribute of the new <h1> node to 'victory'
newHeader.id = 'victory';

// 4) Set the text content of the new <h1> node
const yourName = 'Your Name'; // Replace with your actual name
newHeader.textContent = `${yourName} is the champion`;

// Append the new <h1> node to the document body
document.body.appendChild(newHeader);
