export class Wallet {
  constructor(money) {
    let currentMoney = money;
    this.setWallet(currentMoney);
  }
  setWallet(money) {
    document.querySelector(".wallet").textContent = money;
  }
  addMoney(money) {
    return (money *= 3);
  }
  minusMoney(money) {
    return (money /= 2);
  }
}
