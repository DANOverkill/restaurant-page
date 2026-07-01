function writeMenu (content) {
    content.innerHTML = `
        <div id="testContent">
            <h1>This is the Menu Page</h1>
            <h3>Item 01</h3>
            <h3>Item 02</h3>
            <h3>Item ...</h3>
        </div>`;
};


export {writeMenu};

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

const menu = [
    // MEADS
    {
        type: "mead",
        name: "Bacus",
        image: bacusImage,
        description: "Dry mead fermented with green grapes",
        price: 25
    },
    {
        type: "mead",
        name: "Blucefalus",
        image: blucefalusImage,
        description: "Strong traditional mead with deep blueberry notes",
        price: 28
    },
    {
        type: "mead",
        name: "Ginger Lime Mead",
        image: gingerLimeImage,
        description: "Crisp mead infused with ginger and lime zest",
        price: 24
    },
    {
        type: "mead",
        name: "Miruvor",
        image: miruvorImage,
        description: "Light mythical-inspired honey mead with a mixture of wild berries",
        price: 30
    },
    {
        type: "mead",
        name: "Nostalgia Blue",
        image: nostalgiaBlueImage,
        description: "Sweet blueberry honey mead with a smooth finish",
        price: 26
    },
    {
        type: "mead",
        name: "Raspberry Freezy",
        image: raspberryFreezyImage,
        description: "Cold-fermented raspberry mead, slightly tart",
        price: 27
    },

    // DINNERS
    {
        type: "dinner",
        name: "Brazilian PF",
        image: brazilianPFImage,
        description: "Traditional Brazilian plate with salad, rice, beans, and a fried egg",
        price: 32
    },
    {
        type: "dinner",
        name: "Meat Stew",
        image: meatStewImage,
        description: "Slow-cooked hearty stew with seasonal vegetables served with the house rice",
        price: 29
    },
    {
        type: "dinner",
        name: "Not Big Mac",
        image: notBigMacImage,
        description: "Our house burger inspired by fast-food classics, but better",
        price: 22
    }
];

