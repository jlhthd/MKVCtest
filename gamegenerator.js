var Card = document.registerElement('card-el');

function createCards() {
    "use strict";
    var board = document.createElement("div");
    board.className = "board";
    
    //create line
    
//    var i = 0;
//    for (i = 0; i < 6; i++) {
//        //create housing
//        var cardHouse = document.createElement("div");
//        cardHouse.className = "cardhouse";
//        
//        //create card
//        var card = document.createElement("card-el");
//        card.className = "bluecard";
//        
//        var cardHeader = document.createElement("h3");
//        var cardTitle = document.createTextNode("Card Name");
//        cardHeader.appendChild(cardTitle);
//        
//        var cardBody = document.createElement("p");
//        var cardText = document.createTextNode("Card Text");
//        cardBody.appendChild(cardText);
//        
//        card.appendChild(cardHeader);
//        card.appendChild(cardBody);
//        
//        //add card to housing
//        cardHouse.appendChild(card);
//        
//        //add num cards
//        var numCardsDiv = document.createElement("div");
//        numCardsDiv.id = "numCards" + i;
//        
//        var numCardsText = document.createTextNode("6");
//        numCardsDiv.appendChild(numCardsText);
//        
//        cardHouse.appendChild(numCardsDiv);
//        
//        //add housing to board
//        board.appendChild(cardHouse);
//    }
    
    var el = document.getElementById("main");
    el.appendChild(board);
}