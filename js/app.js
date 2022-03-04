//assign players
let computerPlayer;
let player;
let computerDeck;
let playerDeck;
let middleofDeck;
////let playerCard;
let computerCard;

//make arrays for deck
const suits = ["h", "d", "c", "s"];
const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

let deck = getDeck();
shuffleDeck();

//make deck
function getDeck() {
  let deck = new Array();
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let card;
      if (values[x] === "A") {
        card = {
          value: 1,
          card: suits[i] + values[x],
        };
      } else if (values[x] === "J") {
        card = {
          value: 11,
          card: suits[i] + values[x],
        };
      } else if (values[x] === "Q") {
        card = {
          value: 12,
          card: suits[i] + values[x],
        };
      } else if (values[x] === "K") {
        card = {
          value: 13,
          card: suits[i] + values[x],
        };
      } else {
        card = {
          value: values[x],
          card: suits[i] + values[x],
        };
      }
      deck.push(card);
    }
  }
  return deck;
}
//shuffle deck

function shuffleDeck() {
  for (let i = 0; i < 500; i++) {
    let location1 = Math.floor(Math.random() * deck.length);
    let location2 = Math.floor(Math.random() * deck.length);
    let tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
}

//divide deck by two players
divideDeck();
function divideDeck() {
  middleOfDeck = Math.ceil(deck.length / 2);
  computerDeck = deck.splice(0, middleOfDeck);
  playerDeck = deck.splice(-middleOfDeck);
}

//add event listener for player and computer to draw a card from the top by
//clicking on the player pile
// document.addEventListener("click", flipCards);
// function flipCards() {
//   document.querySelector("player-deck", "click");
//}

//drawing the cards
// function drawCards() {
//     let playerCard = playerDeck.shift();
//     let computerCard = computerDeck.shift();
// }

//determining winner
// function determineWinner(){
//     if (playerCard.value > computerCard.value) {
//          results-text.innerText = "Player Wins!"
//          playerDeck.push(playerCard)
//          playerDeck.push(computerCard

//     } else if (computerCard.value > playerCard.value)
//         results-text.innerText = "Computer-Wins"
//          computerDeck.push(computerCard)
//          computerDeck.push(playerCard)
//    } else (playerCard.value === computerCard.value)
//         results-text.innerText = "It's a tie!"
// }

//tie

//message for who won

//cards return to winner and are pushed to the bottom of their deck

//when all cards are with one player they are the winner, add message.
