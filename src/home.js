import homeTemplate from "./home.html"

function writeHome (content) {
    content.innerHTML = homeTemplate;
};


export {writeHome};