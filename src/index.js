console.log("hello world")

//Imports
import "./style.css";

//DOM Cash
const content = document.querySelector('#content');

// Content display write function
function writeContent() {
    content.innerHTML = `
        <div id="testContent">
            <h1>Hello World</h1>
        </div>`;
};

writeContent();