function over (element) {
    element.style.backgroundColor="cornflowerblue";
}

function out (element) {
    element.style.backgroundColor="white";
}

var cardArray = [2,3,4,5,6,7,8,9,10,10,10,10,10];
var dealerHand = [cardArray[Math.floor(Math.random() * 13)]];
var userHand = [cardArray[Math.floor(Math.random() * 13)], cardArray[Math.floor(Math.random() * 13)]];

function arrSum(arr) {
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}

function deal() {
    var dealerHandHTML = document.querySelector("#dealerHandHTML");
    dealerHandHTML.innerText = dealerHand;
    
    var userHandHTML = document.querySelector("#userHandHTML");
    userHandHTML.innerText = userHand;
    
    var button = document.querySelector("#dealButton");
    button.remove();

    var userHandValue = document.querySelector("#userHandValue");
    userHandValue.innerText = "User Hand Value: " + arrSum(userHand);

    var dealerHandValue = document.querySelector("#dealerHandValue");
    dealerHandValue.innerText = "Dealer Hand Value: " + arrSum(dealerHand);
}

function hit() {
    userHand.push(cardArray[Math.floor(Math.random() * 13)]);
    userHandHTML.innerText = userHand;

    var userHandValue = document.querySelector("#userHandValue");
    userHandValue.innerText = "User Hand Value: " + arrSum(userHand);

    if (arrSum(userHand) > 21) {
        setTimeout(function(){alert("Bust.");},1000);
        setTimeout(function(){location.reload();},1000);
    }

    else if (arrSum(userHand) == 21) {
        setTimeout(function(){alert("Blackjack!");},1000);
        setTimeout(function(){location.reload();},1000);
    }
}

function stay() {
    var button = document.querySelector("#hitButton");
    button.remove();
    
    while(arrSum(dealerHand) < 17) {
        dealerHand.push(cardArray[Math.floor(Math.random() * 13)]);
        dealerHandHTML.innerText = dealerHand;
        
        var dealerHandValue = document.querySelector("#dealerHandValue");
        dealerHandValue.innerText = "Dealer Hand Value: " + arrSum(dealerHand)
    }

    if(arrSum(dealerHand) > 21) {
        setTimeout(function(){alert("You Won!");},1200);
        setTimeout(function(){location.reload();},1200);
    }
    
    else if(arrSum(dealerHand) > arrSum(userHand)) {
        setTimeout(function(){alert("You Lost.");},1200);
        setTimeout(function(){location.reload();},1200);
        }
    
    else if(arrSum(dealerHand) < arrSum(userHand)) {
        setTimeout(function(){alert("You Won!");},1200);
        setTimeout(function(){location.reload();},1200);
        }

    else if(arrSum(dealerHand) == arrSum(userHand)) {
        setTimeout(function(){alert("Push.");},1200);
        setTimeout(function(){location.reload();},1200);
        }
}
