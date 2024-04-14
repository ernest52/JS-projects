const form = document.querySelector("form.comment__form");
const wrapper = document.querySelector(".wrapper");
const commentBlock = document.querySelector("#comment");
const commentArea = document.querySelector("div.comment");
const username = document.querySelector("#username");
const warning = document.querySelector("span#warning");
const colorsPanel = document.querySelector(".color__panel");
const webPageColors = document.querySelector("#color__panel-page");
const commentPanelColors = document.querySelector("#color__panel-comment");
let color = 0;
let page, commentPanel;
// kolorow tyle samo ile spanow
const colors = [
  "white",
  "black",
  "crimson",
  "green",
  "yellow",
  "pink",
  "purple",
];
for (let j = 1; j <= 2; j++) {
  if (j == 1) {
    for (let i = 0; i < colors.length; i++) {
      // tworzenie spama i dodanie go do commentPanelColors
      const span = document.createElement("span");
      span.style.backgroundColor = colors[i];
      span.dataset.key = i;
      commentPanelColors.appendChild(span);
    }
  } else {
    for (let i = 0; i < colors.length; i++) {
      // tworzenie spama i dodanie go do webPageColors
      const span = document.createElement("span");
      span.style.backgroundColor = colors[i];
      span.dataset.key = colors[i];
      webPageColors.appendChild(span);
    }
  }
}

function changeColor(key) {
  if (colors[key] !== undefined) {
    form.style.backgroundColor = colors[key];
  } else {
    wrapper.style.backgroundColor = key;
  }
}

colorsPanel.addEventListener("click", function (e) {
  if (e.target.nodeName == "SPAN") {
    let key = e.target.dataset.key;
    changeColor(key, length);
  }
});
warning.style.display = "none";
let counter = 0,
  comment;
const maxCharacters = 1000,
  minCharacters = 20,
  minUsername = 5,
  maxUsername = 20;
const images = [
  {
    src: "./images/img1.jpg",
  },
  {
    src: "./images/img2.jpg",
  },
  {
    src: "./images/img3.jpg",
  },
  {
    src: "./images/img4.jpg",
  },
];

function addNewComment() {
  const newComment = document.createElement("div");
  newComment.classList.add("comment__box");
  commentArea.appendChild(newComment);
  // tworzenie obrazu i dodanie go
  const userImage = document.createElement("img");
  const index = Math.floor(Math.random() * 4);
  userImage.src = images[index].src;
  userImage.setAttribute("id", "user-img");
  newComment.appendChild(userImage);

  // tworzenie author span
  const author = document.createElement("span");
  author.setAttribute("id", "author");
  author.textContent = username.value;
  newComment.appendChild(author);

  // adding comment
  const text = document.createElement("span");
  text.setAttribute("id", "comment-text");
  text.textContent = " " + comment;
  newComment.appendChild(text);

  username.value = "";
  commentBlock.value = "";
  warning.style.display = "none";
}

commentBlock.value = "";
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (counter == 0 && !username.value.length) {
    warning.style.display = "inline";
    warning.textContent = `wprowadź tekst by dodać komentarz, uzupełnij pole username`;
  } else {
    if (
      counter < minCharacters ||
      !username.value.length ||
      username.value.length < minUsername ||
      username.value.length > maxUsername
    ) {
      warning.style.display = "inline";
      if (counter < minCharacters && username.value.length < minUsername) {
        warning.textContent = `twój komentarz musi mieć minimum ${minCharacters} znaków ;twoja nazwa musi mieć minimum ${minUsername} znaków `;
      } else {
        if (counter < minCharacters) {
          warning.textContent = `twój komentarz musi mieć minimum ${minCharacters} znaków `;
        } else if (
          !username.value.length ||
          username.value.length < minUsername ||
          username.value.length > maxUsername
        ) {
          if (!username.value.length) {
            warning.textContent = `by dodać komentarz wpisz swoją nazwę`;
          } else {
            if (username.value.length < minUsername) {
              warning.textContent = `twoja nazwa musi mieć minimum ${minUsername} znaków`;
            } else {
              warning.textContent = `twoja nazwa może mieć maksymalnie ${maxUsername} znaków`;
            }
          }
        }
      }
    } else {
      addNewComment();
    }
  }
});

commentBlock.addEventListener("input", function (e) {
  counter = this.value.length;
  if (counter > maxCharacters) {
    warning.style.display = "inline";
    warning.textContent = `za długi teskt  max ${maxCharacters} znaków obecnych ${counter}`;
  } else {
    warning.style.display = "none";
    comment = this.value;
  }
});
