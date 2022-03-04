let computerPlayer;
let player;
let computerDeck;
let playerDeck;
let middleofDeck;

let computerCard;

const suits = ["h", "d", "c", "s"];
const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

let deck = getDeck();
shuffleDeck();

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

function shuffleDeck() {
  for (let i = 0; i < 500; i++) {
    let location1 = Math.floor(Math.random() * deck.length);
    let location2 = Math.floor(Math.random() * deck.length);
    let tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
}

divideDeck();
function divideDeck() {
  middleOfDeck = Math.ceil(deck.length / 2);
  computerDeck = deck.splice(0, middleOfDeck);
  playerDeck = deck.splice(-middleOfDeck);
}
