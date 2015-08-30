var Card = document.registerElement('card-el');

function createCards() {
    "use strict";
    var house = document.createElement("div");
    house.className = "house";
    
    var i = 0;
    for (i = 0; i < 6; i++) {
        var card = document.createElement("card-el");
        card.className = "card";
        var cardOffset = i * 20;
        card.style.top = cardOffset + "px";
        
        var cardHeader = document.createElement("h3");
        var cardTitle = document.createTextNode("Card Name");
        cardHeader.appendChild(cardTitle);
        
        var cardBody = document.createElement("p");
        var cardText = document.createTextNode("Card Text");
        cardBody.appendChild(cardText);
        
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        
        house.appendChild(card);
    }
    
    var el = document.getElementById("main");
    el.appendChild(house);
}