var cardColor = {
    BLUE: 0,
    GREEN: 1,
    RED: 2,
    PURPLE: 3
};

var Card = document.registerElement('card-el');
var masterCardList = [
    {name: "Field", text: "", color: cardColor.BLUE, rolls: [1], multiplier: 1, dependence: false, dependencies: [], startingNumCards: 6, cost: 1},
    {name: "Field", text: "", color: cardColor.BLUE, rolls: [2], multiplier: 1, dependence: false, dependencies: [], startingNumCards: 6, cost: 1},
    {name: "Field", text: "", color: cardColor.GREEN, rolls: [2,3], multiplier: 1, dependence: false, dependencies: [], startingNumCards: 6, cost: 1},
    {name: "Field", text: "", color: cardColor.RED, rolls: [1], multiplier: 1, dependence: false, dependencies: [], startingNumCards: 6, cost: 2},
    {name: "Field", text: "", color: cardColor.GREEN, rolls: [1], multiplier: 1, dependence: false, dependencies: [], startingNumCards: 6, cost: 3},
    {name: "Field", text: "", color: cardColor.BLUE, rolls: [1], multiplier: 1, dependence: false, dependencies: [], startingNumCards: 6, cost: 3},
    {name: "Field", text: "", color: cardColor.PURPLE, rolls: [1], multiplier: 1, dependence: false, dependencies: [], startingNumCards: 4, cost: 6},
    {name: "Field", text: "", color: cardColor.PURPLE, rolls: [1], multiplier: 1, dependence: false, dependencies: [], startingNumCards: 4, cost: 7},
    {name: "Field", text: "", color: cardColor.PURPLE, rolls: [1], multiplier: 1, dependence: false, dependencies: [], startingNumCards: 4, cost: 8},
    {name: "Field", text: "", color: cardColor.GREEN, rolls: [1], multiplier: 1, dependence: false, dependencies: [], startingNumCards: 6, cost: 1},
    {name: "Field", text: "", color: cardColor.GREEN, rolls: [1], multiplier: 1, dependence: false, dependencies: [], startingNumCards: 6, cost: 1},
    {name: "Field", text: "", color: cardColor.BLUE, rolls: [1], multiplier: 1, dependence: false, dependencies: [], startingNumCards: 6, cost: 1},
    {name: "Field", text: "", color: cardColor.RED, rolls: [1], multiplier: 1, dependence: false, dependencies: [], startingNumCards: 6, cost: 1},
    {name: "Field", text: "", color: cardColor.BLUE, rolls: [1], multiplier: 1, dependence: false, dependencies: [], startingNumCards: 6, cost: 1},
    {name: "Field", text: "", color: cardColor.GREEN, rolls: [1], multiplier: 1, dependence: false, dependencies: [], startingNumCards: 6, cost: 1}
];

function createCards() {
    "use strict";
    var playArea = document.getElementById("playarea");
    
    var opponents = document.getElementById("opponentsarea");
    
    var i = 0;
    for (i = 0; i < 3; i++) {
        var opp = document.createElement("div");
        opp.className = "opponent";
        opponents.appendChild(opp);
    }
    
    var board = document.getElementById("board");
    
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
        
        //add buy button
        var buyButton = document.createElement("button");
        var buttonText = document.createTextNode("BUY: " + masterCardList[i].cost);
        buyButton.appendChild(buttonText);
        
        var numCardsText = document.createTextNode(masterCardList[i].startingNumCards);
        numCardsDiv.appendChild(numCardsText);
        numCardsDiv.appendChild(buyButton);
        
        cardHouse.appendChild(numCardsDiv);
        
        //add housing to board
        cardSleeve.appendChild(cardHouse);
        board.appendChild(cardSleeve);
    }
    
//    var playerArea = document.createElement("div");
//    playerArea.className = "playerarea";
//    playArea.appendChild(playerArea);
}

function tempFillLog() {
    "use strict";
    var el = document.getElementById("logarea");
    
    var i = 0;
    for (i = 0; i < 50; i++) {
        var post = document.createElement("p");
        post.className = "logpost";
        var postText = document.createTextNode("Blah blah blah blah blah blah blah blah blah blah: " + i);
        
        post.appendChild(postText);
        el.appendChild(post);
    }
}