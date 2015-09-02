var cardColor = {
    BLUE: 0,
    GREEN: 1,
    RED: 2,
    PURPLE: 3
};

var Card = document.registerElement('card-el');
var masterCardList = [
    {name: "Field", text: "", color: cardColor.BLUE, rolls: [1], multiplier: 1, dependence: false, dependencies: []},
    {name: "Field", text: "", color: cardColor.BLUE, rolls: [2], multiplier: 1, dependence: false, dependencies: []},
    {name: "Field", text: "", color: cardColor.GREEN, rolls: [2,3], multiplier: 1, dependence: false, dependencies: []},
    {name: "Field", text: "", color: cardColor.RED, rolls: [1], multiplier: 1, dependence: false, dependencies: []},
    {name: "Field", text: "", color: cardColor.GREEN, rolls: [1], multiplier: 1, dependence: false, dependencies: []},
    {name: "Field", text: "", color: cardColor.BLUE, rolls: [1], multiplier: 1, dependence: false, dependencies: []},
    {name: "Field", text: "", color: cardColor.PURPLE, rolls: [1], multiplier: 1, dependence: false, dependencies: []},
    {name: "Field", text: "", color: cardColor.PURPLE, rolls: [1], multiplier: 1, dependence: false, dependencies: []},
    {name: "Field", text: "", color: cardColor.PURPLE, rolls: [1], multiplier: 1, dependence: false, dependencies: []},
    {name: "Field", text: "", color: cardColor.GREEN, rolls: [1], multiplier: 1, dependence: false, dependencies: []},
    {name: "Field", text: "", color: cardColor.GREEN, rolls: [1], multiplier: 1, dependence: false, dependencies: []},
    {name: "Field", text: "", color: cardColor.BLUE, rolls: [1], multiplier: 1, dependence: false, dependencies: []},
    {name: "Field", text: "", color: cardColor.RED, rolls: [1], multiplier: 1, dependence: false, dependencies: []},
    {name: "Field", text: "", color: cardColor.BLUE, rolls: [1], multiplier: 1, dependence: false, dependencies: []},
    {name: "Field", text: "", color: cardColor.GREEN, rolls: [1], multiplier: 1, dependence: false, dependencies: []}
];

function createCards() {
    "use strict";
    var board = document.createElement("div");
    board.className = "board";
    
    //create line
//    var line = document.createElement("div");
//    line.className = "line";
    
    var i = 0;
    for (i = 0; i < masterCardList.length; i++) {
        //create card sleeve
        var cardSleeve = document.createElement("div");
        cardSleeve.className = "cardsleeve";
        
        //create housing
        var cardHouse = document.createElement("div");
        cardHouse.className = "cardhouse";
        
        //create card
        var card = document.createElement("card-el");
        switch(masterCardList[i].color) {
            case cardColor.BLUE:
                card.className = "bluecard";
                break;
            case cardColor.GREEN:
                card.className = "greencard";
                break;
            case cardColor.RED:
                card.className = "redcard";
                break;
            case cardColor.PURPLE:
                card.className = "purplecard";
                break;
            default:
                card.className = "bluecard";
        }
        
        var cardHeader = document.createElement("h3");
        var cardTitle = document.createTextNode(masterCardList[i].rolls + " " + masterCardList[i].name);
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