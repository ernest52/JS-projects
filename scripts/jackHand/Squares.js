export default class Squares {
  setSquares() {
    let colorsArray = ["red", "green", "blue"];
    let currentColors = document.querySelectorAll(".color");
    currentColors.forEach((color) => {
      const i = Math.floor(Math.random() * currentColors.length);
      color.style.backgroundColor = colorsArray[i];
    });
    return currentColors;
  }
}
