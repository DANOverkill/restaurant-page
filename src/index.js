console.log("hello world")

//Imports
import "./style.css";
import { writeHome } from "./home.js";
import { writeMenu } from "./menu.js";
import { writeAbout } from "./about.js";

//DOM Cash
const content = document.querySelector('#content');
const homeBtn = document.querySelector('#homeBtn');
const menuBtn = document.querySelector('#menuBtn');
const aboutBtn = document.querySelector('#aboutBtn');

// Content display write function
writeHome(content);

// Event Listeners
homeBtn.addEventListener ('click', () => writeHome(content));
menuBtn.addEventListener ('click', () => writeMenu(content));
aboutBtn.addEventListener ('click', () => writeAbout(content));