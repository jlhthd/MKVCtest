var cardColor = {
    BLUE: 0,
    GREEN: 1,
    RED: 2,
    PURPLE: 3
};

var Card = document.registerElement('card-el');
var masterCardList = [
    [Field, cardColor.BLUE, [1], 1, false, []],
    [Ranch, cardColor.BLUE, [2], 1, false, []],
    [XXX, cardColor.GREEN, [2,3], 1, false, []],
    [Coffeehouse, cardColor.RED, [3], 1, false, []],
    [XXX, cardColor.GREEN, [4], 3, false, []],
    [XXX, cardColor.BLUE, [5], 1, false, []],
    [XXX, cardColor.PURPLE, [6], 5, false, []],
    [XXX, cardColor.PURPLE, [6], 2, false, []],
    [XXX, cardColor.PURPLE, [6], 0, false, []],
    [XXX, cardColor.GREEN, [7], 2, true, [1]],
    [XXX, cardColor.GREEN, [8], 3, true, [5]],
    [XXX, cardColor.BLUE, [9], 2, false, []],
    [XXX, cardColor.RED, [9,10], 1, false, []],
    [XXX, cardColor.BLUE, [10], 2, false, []],
    [XXX, cardColor.GREEN, [10,11], 2, true, [0]]
];

function createCards() {
    "use strict";
    var board = document.createElement("div");
    board.className = "board";
    
    //create line
//    var line = document.createElement("div");
//    line.className = "line";
    
    var i = 0;
    for (i = 0; i < 6; i++) {
        //create card sleeve
        var cardSleeve = document.createElement("div");
        cardSleeve.className = "cardsleeve";
        
        //create housing
        var cardHouse = document.createElement("div");
        cardHouse.className = "cardhouse";
        
        //create card
        var card = document.createElement("card-el");
        card.className = "bluecard";
        
        var cardHeader = document.createElement("h3");
        var cardTitle = document.createTextNode("Card Name");
        cardHeader.appendChild(cardTitle);
        
        var cardBody = document.createElement("p");
        var cardText = document.createTextNode("Card Text");
        cardBody.appendChild(cardText);
        
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        
        //add card to housing
        cardHouse.appendChild(card);
        
        //add num cards
        var numCardsDiv = document.createElement("div");
        numCardsDiv.id = "numCards" + i;
        
        var numCardsText = document.createTextNode("6");
        numCardsDiv.appendChild(numCardsText);
        
        cardHouse.appendChild(numCardsDiv);
        
        //add housing to board
        cardSleeve.appendChild(cardHouse);
        board.appendChild(cardSleeve);
    }
    
//    board.appendChild(line);
    
    var el = document.getElementById("main");
    el.appendChild(board);
}