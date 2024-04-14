import Bid from "./Bid.js";
import { Wallet } from "./Wallet.js";
class Game {
  #getBid;
  #getWallet;
  #getMoney;
  #setMoney;
  #getGame;
  #getWin;
  #setWin;
  #setLoss;
  #getLoss;
  constructor(amount) {
    let money = amount;
    // this.wallet = new Wallet(money);
    const wallet = new Wallet(money);
    this.#getWallet = () => wallet;
    // this.bid = new Bid(money);
    const bid = new Bid();
    this.#getBid = () => bid;

    this.#getMoney = () => money;
    this.#setMoney = (value) => (money = value);
    document
      .querySelector("#start")
      .addEventListener("click", () => this.#setGame());
  }
  #setGame() {
    let startGame = this.#getBid().setBid(this.#getMoney());
    this.#setMoney(startGame[0]);
    if (startGame[1]) {
      let games = this.#getBid().getGames();
      this.#getGame = () => games;
      let win = 0;
      this.#getWin = () => win;
      this.#setWin = () => win++;
      let loss = 0;
      this.#getLoss = () => loss;
      this.#setLoss = () => loss++;
      this.#scores();
      this.#setScores();
      this.#getWallet().setWallet(this.#getMoney());
    } else if (
      this.#getMoney() > 0 &&
      (!this.#getBid().bidValue || this.#getBid().bidValue < 0)
    ) {
      alert("set proper amount of money");
    } else {
      alert("you have too little money to bet");
    }
  }
  #scores() {
    let addMoney = false;
    this.#getGame().forEach((game) => {
      addMoney = false;
      if (
        (game[0] == game[1] && game[0] == game[2] && game[1] == game[2]) ||
        (game[0] !== game[1] && game[0] !== game[2] && game[1] !== game[2])
      ) {
        addMoney = true;

        this.#addWinning();
      } else {
        this.#addLoss();
      }
    });
    console.log(addMoney);
    if (addMoney) {
      this.#setMoney(this.#getWallet().addMoney(this.#getMoney()));
    } else {
      this.#setMoney(
        Math.floor(this.#getWallet().minusMoney(this.#getMoney()))
      );
    }
  }
  #addWinning() {
    // this.win++;
    this.#setWin();
  }
  #addLoss() {
    // this.loss++;
    this.#setLoss();
  }
  #setScores() {
    const number = document.querySelector(".number");
    const wins = document.querySelector(".win");
    const losses = document.querySelector(".loss");
    number.textContent = this.#getGame().length;
    wins.textContent = this.#getWin();
    losses.textContent = this.#getLoss();
  }
}

const game = new Game(200);
