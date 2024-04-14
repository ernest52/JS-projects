class Simon {
  constructor() {
    this.level = 0;
    this.computerMoves = [];
    this.userMoves = [];
    this.colors = ["green", "red", "yellow", "blue"];
    this.winning;
    this.play = true;
    $(".btn").click((e) => this.userMoving(e));
    document.addEventListener("keypress", (e) => this.computerMoving(e));
  }

  chooseIndex() {
    return Math.floor(Math.random() * 4);
  }
  userMoving(e) {
    console.dir(e.target.id);
    const move = e.target.id;
    this.userMoves.push(move);
    console.log("user movies:", this.userMoves);
    this.animateUser(move);
    // console.log(
    //   `this.userMoves.length == this.computerMoves.length ${this.userMoves.length} == ${this.computerMoves.length}`
    // );
    this.checkWinning();
    console.log(this.winning);
    if (this.userMoves.length == this.computerMoves.length && this.winning) {
      this.userMoves.length = 0;
      this.computerMoves.length = 0;
      // this.arrayReset();
      this.computerMoving();
    } else if (!this.winning) {
      this.userMoves.length = 0;
      this.computerMoves.length = 0;
      this.level = 0;
      $("h1").text("GAME OVER PLAY AGAIN? Y/N");
      this.play = true;
    }
  }
  // arrayReset() {
  //   this.computerMoves.length = 0;
  //   this.userMoves.length = 0;
  // }

  computerMoving(e = 0) {
    if (e.key == "a" || (e.key == "y" && this.play)) {
      this.play = false;
      this.userMoves.length = 0;
      this.computerMoves.length = 0;
      this.level = 0;
    } else if (e.key == "n" && this.play) {
      document.body.style.backgroundColor = "red";
      document.body.textContent = "";
      const info = document.createElement("div");
      info.classList.add("gameOver");
      info.textContent = "GAME OVER";
      console.log(info);
      document.body.appendChild(info);
      return;
    }
    this.level++;

    $("h1").text("level: " + this.level);

    for (let i = 0; i < this.level; i++) {
      const index = this.chooseIndex();
      const newColor = this.colors[index];
      this.computerMoves.push(newColor);
      console.log("computer moves:", this.computerMoves);
    }
    this.animateColor(this.computerMoves);
  }
  animateColor(colors) {
    let index = 0;
    console.log(colors.length);
    const interId = setInterval(() => {
      $(`#${colors[index]}`).fadeOut().fadeIn();
      index == colors.length - 1 ? clearInterval(interId) : index++;

      console.log(colors);
    }, 1000);
  }
  animateUser(color) {
    $("#" + color).addClass("pressed");
    setTimeout(function () {
      $("#" + color).removeClass("pressed");
    }, 100);
  }

  checkWinning() {
    this.winning = true;
    for (let i = 0; i < this.userMoves.length; i++) {
      if (this.computerMoves[i] !== this.userMoves[i]) {
        this.winning = false;
        break;
      }
    }
  }
}
const game = new Simon();
