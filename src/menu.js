//menu images import
import brazilianPFImage from "./assets/images/menu/dinner_brazilianPF.jpeg";
import meatStewImage from "./assets/images/menu/dinner_meatStew.jpg";
import notBigMacImage from "./assets/images/menu/dinner_notBigMac.jpeg";

import bacusImage from "./assets/images/menu/mead_bacus.jpg";
import blucefalusImage from "./assets/images/menu/mead_blucefalus.jpg";
import gingerLimeImage from "./assets/images/menu/mead_gingerLime.jpg";
import miruvorImage from "./assets/images/menu/mead_miruvor.jpg";
import nostalgiaBlueImage from "./assets/images/menu/mead_nostalgiaBlue.jpg";
import raspberryFreezyImage from "./assets/images/menu/mead_raspberryFreezy.jpg";

//dynamic html logic
function writeMenu (content) {
    content.innerHTML = "";
    menu.forEach(item => {
        content.appendChild(createMenuItem(item));
    });
};

let createMenuItem = function (menuItem) {
    let card = document.createElement('div');
    
    card.className = 'menuItem'; 

    card.dataset.id = menuItem.id;

    card.innerHTML = `
        <h3 class="itemName">${menuItem.name}</h3>
        <p>type: ${menuItem.type}</p>
        <img class="menuImage" src="${menuItem.image}" alt="${menuItem.name}">
        <p class="description">description: ${menuItem.description}</p>
        <p class="price">price:CD$ ${menuItem.price}</p>
  `;

  return card; 
}


//Menu Array
const menu = [
    // MEADS
    {
        id: crypto.randomUUID(),
        type: "mead",
        name: "Bacus",
        image: bacusImage,
        description: "Dry mead fermented with green grapes",
        price: 25
    },
    {
        id: crypto.randomUUID(),
        type: "mead",
        name: "Blucefalus",
        image: blucefalusImage,
        description: "Strong traditional mead with deep blueberry notes",
        price: 28
    },
    {
        id: crypto.randomUUID(),
        type: "mead",
        name: "Ginger Lime Mead",
        image: gingerLimeImage,
        description: "Crisp mead infused with ginger and lime zest",
        price: 24
    },
    {
        id: crypto.randomUUID(),
        type: "mead",
        name: "Miruvor",
        image: miruvorImage,
        description: "Light mythical-inspired honey mead with a mixture of wild berries",
        price: 30
    },
    {
        id: crypto.randomUUID(),
        type: "mead",
        name: "Nostalgia Blue",
        image: nostalgiaBlueImage,
        description: "Sweet blueberry honey mead with a smooth finish",
        price: 26
    },
    {
        id: crypto.randomUUID(),
        type: "mead",
        name: "Raspberry Freezy",
        image: raspberryFreezyImage,
        description: "Cold-fermented raspberry mead, slightly tart",
        price: 27
    },

    // DINNERS
    {
        id: crypto.randomUUID(),
        type: "dinner",
        name: "Brazilian PF",
        image: brazilianPFImage,
        description: "Traditional Brazilian plate with salad, rice, beans, and a fried egg",
        price: 32
    },
    {
        id: crypto.randomUUID(),
        type: "dinner",
        name: "Meat Stew",
        image: meatStewImage,
        description: "Slow-cooked hearty stew with seasonal vegetables served with the house rice",
        price: 29
    },
    {
        id: crypto.randomUUID(),
        type: "dinner",
        name: "Not Big Mac",
        image: notBigMacImage,
        description: "Our house burger inspired by fast-food classics, but better",
        price: 22
    }
];

//Export
export {writeMenu};