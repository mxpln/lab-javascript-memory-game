let cardsArray = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
];

class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = {};
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards(cardsArray) {
    let array2 = [...cardsArray];
    let n = array2.length,
      i;

    // While there remain elements to shuffle…
    while (n) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * array2.length);

      // If not already shuffled, move it to the new array.
      if (i in cardsArray) {
        cardsArray.push(array2[i]);
        delete array2[i];
        n--;
      }
    }

    console.log(array2);
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1.name === card2.name) {
      this.cards.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }
  isFinished() {}
}
const memoryGame = new MemoryGame(cardsArray);
memoryGame.shuffleCards(cardsArray);
