var cardColor = {
    BLUE: 0,
    GREEN: 1,
    RED: 2,
    PURPLE: 3
};

var cardType = {
    TOWER: 0,
    WHEAT: 1,
    COW: 2,
    BREAD: 3,
    COFFEE: 4,
    GEAR: 5,
    FACTORY: 6,
    FRUIT: 7
};

var Card = document.registerElement('card-el');
var masterCardList = [
    {name: "Field", text: "Get 1 coind from the bank, on anyone's turn.", color: cardColor.BLUE, rolls: [1], multiplier: 1, dependence: false, dependencies: [], startingNumCards: 6, cost: 1, type: cardType.WHEAT},
    {name: "Ranch", text: "Get 1 coin from the bank, on anyone's turn.", color: cardColor.BLUE, rolls: [2], multiplier: 1, dependence: false, dependencies: [], startingNumCards: 6, cost: 1, type: cardType.COW},
    {name: "Bakery", text: "Get 1 coin from the bank, on your turn only.", color: cardColor.GREEN, rolls: [2,3], multiplier: 1, dependence: false, dependencies: [], startingNumCards: 6, cost: 1, type: cardType.BREAD},
    {name: "Cafe", text: "Get 1 coin from the player who rolled the dice.", color: cardColor.RED, rolls: [3], multiplier: 1, dependence: false, dependencies: [], startingNumCards: 6, cost: 2, type: cardType.COFFEE},
    {name: "Convenience Store", text: "Get 3 coins from the bank, on your turn only.", color: cardColor.GREEN, rolls: [4], multiplier: 3, dependence: false, dependencies: [], startingNumCards: 6, cost: 3, type: cardType.BREAD},
    {name: "Forest", text: "Get 1 coin from the bank, on anyone's turn.", color: cardColor.BLUE, rolls: [5], multiplier: 1, dependence: false, dependencies: [], startingNumCards: 6, cost: 3, type: cardType.GEAR},
    {name: "Stadium", text: "Get 2 coins from all players, on your turn only.", color: cardColor.PURPLE, rolls: [6], multiplier: 2, dependence: false, dependencies: [], startingNumCards: 4, cost: 6, type: cardType.TOWER},
    {name: "Tv Station", text: "Take 5 coins from any one player, on your turn only.", color: cardColor.PURPLE, rolls: [6], multiplier: 5, dependence: false, dependencies: [], startingNumCards: 4, cost: 7, type: cardType.TOWER},
    {name: "Business Center", text: "Trade one non-TOWER establishment with another player, on your turn only.", color: cardColor.PURPLE, rolls: [6], multiplier: 1, dependence: false, dependencies: [], startingNumCards: 4, cost: 8, type: cardType.TOWER},
    {name: "Cheese Factory", text: "Get 3 coins from the bank for each COW establishment that you own, on your turn only.", color: cardColor.GREEN, rolls: [7], multiplier: 3, dependence: true, dependencies: [1], startingNumCards: 6, cost: 5, type: cardType.FACTORY},
    {name: "Furniture Factory", text: "Get 3 coins from the bank for each GEAR establishment that you own, on your turn only.", color: cardColor.GREEN, rolls: [8], multiplier: 3, dependence: true, dependencies: [5,12], startingNumCards: 6, cost: 3, type: cardType.FACTORY},
    {name: "Mine", text: "Get 5 coins from the bank, on anyone's turn.", color: cardColor.BLUE, rolls: [9], multiplier: 5, dependence: false, dependencies: [], startingNumCards: 6, cost: 6, type: cardType.GEAR},
    {name: "Family Restaurant", text: "Get 2 coins from the player who rolled the dice.", color: cardColor.RED, rolls: [9,10], multiplier: 2, dependence: false, dependencies: [], startingNumCards: 6, cost: 3, type: cardType.COFFEE},
    {name: "Apple Orchard", text: "Get 3 coins from the bank, on anyone's turn.", color: cardColor.BLUE, rolls: [10], multiplier: 3, dependence: false, dependencies: [], startingNumCards: 6, cost: 3, type: cardType.WHEAT},
    {name: "Fruit and Vegetable Market", text: "Get 2 coins from the bank for each WHEAT establishment that you own, on your turn only.", color: cardColor.GREEN, rolls: [11,12], multiplier: 2, dependence: true, dependencies: [0,14], startingNumCards: 6, cost: 2, type: cardType.FRUIT}
];

var masterVictoryList = [
    {name: "Train Station", text: "You may roll 1 or 2 dice.", cost: 4},
    {name: "Shopping Mall", text: "Each of your COFFEE or BREAD buildings earn +1 coin.", cost: 10, type: cardType.TOWER},
    {name: "Amusement Park", text: "If you roll doubles, take another turn after this one.", cost: 16, type: cardType.TOWER},
    {name: "Radio Tower", text: "Once every turn, you can choose to reroll your dice.", cost: 22, type: cardType.TOWER}
];

var userPlayer = 1;

var tempPlayerList = [
    {cards: [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0], victoryCards: [false, false, false, false], coins: 3, current: true, hasPurchased: false},
    {cards: [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0], victoryCards: [false, false, false, false], coins: 3, current: false, hasPurchased: false},
    {cards: [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0], victoryCards: [false, false, false, false], coins: 3, current: false, hasPurchased: false},
    {cards: [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0], victoryCards: [false, false, false, false], coins: 3, current: false, hasPurchased: false}
];

var tempGeneral = {
    currentPlayer: 0,
    cardsRemaining: [6,6,6,6,6,6,4,4,4,6,6,6,6,6,6],
    players: tempPlayerList
};

function createCards() {
    "use strict";
    var playArea = document.getElementById("playarea");
    
    var opponents = document.getElementById("opponentsarea");
    
    //create opponent UI
    var i = 0;
    for (i = 1; i <= 4; i++) {
        if(userPlayer !== i) {
            var opp = document.createElement("div");
            opp.className = "opponent";
            opponents.appendChild(opp);

            //need to get which player the current player is and skip that player number
            var name = document.createElement("div");
            var playerNum = i;
            var nameText = document.createTextNode("Player " + playerNum);

            name.appendChild(nameText);
            opp.appendChild(name);

            //need to get correct players money while skipping user
            var money = document.createElement("div");
            var coins = tempGeneral.players[i-1].coins;
            var moneyText = document.createTextNode("Coins: " + coins);

            money.appendChild(moneyText);
            opp.appendChild(money);
            
            //create hover div
            var oppHover = document.createElement("div");
            oppHover.className = "opponentinfo";
            
            var oppHoverTitle = document.createElement("div");
            oppHoverTitle.className = "opponentinfotitle";
            
            var tempOppText = document.createTextNode("Player " + playerNum);
            oppHoverTitle.appendChild(tempOppText);
            
            var oppHoverCards = document.createElement("div");
            oppHoverCards.className = "opponentinfocards";
            
            var j = 0;
            for (j = 0; j < masterCardList.length; j++) {
                var tempText = document.createTextNode(masterCardList[j].name + " " + tempGeneral.players[i-1].cards[j]);
                oppHoverCards.appendChild(tempText);
            }
            
            oppHover.appendChild(oppHoverTitle);
            oppHover.appendChild(oppHoverCards);
            opponents.appendChild(oppHover);
        }
    }
    
    var board = document.getElementById("board");
    
    //create card UI
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
        
        var cardBody = document.createElement("div");
        var cardText = document.createTextNode(masterCardList[i].text);
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
    
    //create player UI
    var playerArea = document.getElementById("playerarea");
    
    //victory cards/coins top row
    //list of owned cards bottom row
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