class Deck {
  #cardsImages = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpeg",
    "10.jpg",
  ];

  constructor() {
    this.cards = [];
    this.#cardsImages.forEach((image) => {
      this.cards.push(new Card(image));
      this.cards.push(new Card(image));
    });
  }

  shuffle() {
    this.cards.sort(() => Math.random() - 0.5);
  }

  removeCard(card) {
    let index = this.cards.findIndex(
      (item) => item.imagePath == card.imagePath
    );
    if (index != -1) {
      this.cards.splice(index, 1);
      card.disconectFromDOM();
    }
  }
}
