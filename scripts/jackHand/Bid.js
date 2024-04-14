import Squares from "./Squares.js";

export default class Bid {
  #getSquares;
  #setGames;

  constructor() {
    let games = [];
    // this.squares = new Squares();
    const squares = new Squares();
    this.#getSquares = () => squares;

    // let Currentmoney = money;

    this.#setGames = (game) => {
      games.push(game);
    };
    this.getGames = () => games;
  }
  setBid(money) {
    let gameStart = [];
    let game = false;
    this.bidValue = Number(document.querySelector("#bid").value);
    if (
      this.bidValue &&
      this.bidValue > 0 &&
      money >= this.bidValue &&
      money > 0
    ) {
      game = true;
    }
    if (game) {
      money -= this.bidValue;
      this.#addGameToArray();
    }

    gameStart.push(money, game);
    return gameStart;
  }
  #addGameToArray() {
    let colors = this.#getSquares().setSquares();
    let game = [];
    for (let i = 0; i < colors.length; i++) {
      let currentColor = colors[i].style.backgroundColor;
      game.push(currentColor);
    }
    this.#setGames(game);
  }
}
// const bid = new Bid(100);
