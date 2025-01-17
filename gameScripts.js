CardName = "";

const suits = ["Wands", "Cups", "Swords", "Pentacles"];
const majorArcana = [
    "The Fool",
    "The Magician",
    "The High Priestess",
    "The Empress",
    "The Emperor",
    "The Hierophant",
    "The Lovers",
    "The Chariot",
    "Strength",
    "The Hermit",
    "Wheel Of Fortune",
    "Justice",
    "The Hanged Man",
    "Death",
    "Temperance",
    "The Devil",
    "The Tower",
    "The Star",
    "The Moon",
    "The Sun",
    "Judgement",
    "The World"
]

class Card {
    constructor(name, suit, type, meaning) {
        this.name = name; 
        this.suit = suit;
        this.type = type; // "Major" or "Minor"
        this.meaning = "meanining";
        if (name != null && suit != null) {
          this.cardName = name + " Of " + suit;
        } else{
          this.cardName = name;
        }
    }
}

function createDeck() {
    let deck = [];

    // Create Major Arcana cards
    for (let cardName of majorArcana) {
        deck.push(new Card(cardName, null, "Major", "Meaning for " + cardName));
    }

    // Create Minor Arcana cards
    for (let suit of suits) {
        for (let i = 1; i <= 14; i++) {
            let cardName = i;
            switch (i) {
                case 1: cardName = "Ace"; break;
                case 2: cardName = "Two"; break;
                case 3: cardName = "Three"; break;
                case 4: cardName = "Four"; break;
                case 5: cardName = "Five"; break;
                case 6: cardName = "Six"; break;
                case 7: cardName = "Seven"; break;
                case 8: cardName = "Eight"; break;
                case 9: cardName = "Nine"; break;
                case 10: cardName = "Ten"; break;
                case 11: cardName = "Page"; break;
                case 12: cardName = "Knight"; break;
                case 13: cardName = "Queen"; break;
                case 14: cardName = "King"; break;
            }
            deck.push(new Card(cardName, suit, "Minor", "Meaning for " + cardName + " Of " + suit));
        }
    }

    return deck;
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    // console.log("This is inside the function", deck);
    // console.clear();
}

let tarotDeck = createDeck();
console.log("This is when the deck is created", createDeck());
shuffleDeck(tarotDeck);
console.log("This is after it is shuffled", tarotDeck);
document.getElementById('results').textContent = 'Is this your card? ' + tarotDeck[0].cardName;

function shuffleFunction() {
    shuffleDeck(tarotDeck);
    var yourCard = document.getElementById('results');
    yourCard.textContent = 'is this your card? ' + tarotDeck[0].cardName;
    
    var img = document.createElement("img");
    var imageCard = tarotDeck[0].cardName;
    imageCard = imageCard.replace(/ /g, '');
    imageCard = imageCard.charAt(0).toLowerCase() + imageCard.slice(1);
    console.log(imageCard);
    img.src = "images/tarotCards/" + imageCard + ".jpg";
    yourCard.appendChild(img);
    console.log(img);
}

/*
Explanation:
shuffleDeck(): The Fisher-Yates shuffle algorithm is used to randomize the deck.
*/