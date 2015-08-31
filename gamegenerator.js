var Card = document.registerElement('card-el');

function createCards() {
    "use strict";
    var board = document.createElement("div");
    board.className = "board";
    
    var i = 0;
    for (i = 0; i < 6; i++) {
        var card = document.createElement("card-el");
        card.className = "bluecard";
        var cardOffset = i * 16.5;
        card.style.left = cardOffset + "%";
        
        var cardHeader = document.createElement("h3");
        var cardTitle = document.createTextNode("Card Name");
        cardHeader.appendChild(cardTitle);
        
        var cardBody = document.createElement("p");
        var cardText = document.createTextNode("Card Text");
        cardBody.appendChild(cardText);
        
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        
        board.appendChild(card);
    }
    
    var el = document.getElementById("main");
    el.appendChild(board);
}