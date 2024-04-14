const MovieCard = class {
  constructor(container, title, content, src, termin) {
    this.termin = new Date(termin);
    this.title = title;
    this.content = content;
    this.src = src;
    this.container = document.querySelector(`#${container}`);
    this.init();
  }
  init() {
    this.currentDate = new Date();
    this.time = this.termin.getTime() - this.currentDate.getTime();
    console.log(this.time);
    this.intervalId;
    this.movie = document.createElement("div");
    this.movie.classList.add("movie-card", "u-to-center");

    this.movietitle = document.createElement("h3");
    this.movietitle.className = "movie-card__title";
    this.movietitle.textContent = this.title;

    this.moviePoster = document.createElement("img");
    this.moviePoster.className = "movie-card__img";
    this.moviePoster.setAttribute("src", `${this.src}`);

    this.movieContent = document.createElement("div");
    this.movieContent.textContent = this.content;
    this.movieContent.classList.add("movie-card__content");

    this.movieFooter = document.createElement("div");
    this.movieFooter.className = "movie-card__footer";

    this.movieButton = document.createElement("button");
    this.movieButton.className = "movie-card__button";

    this.terminDiv = document.createElement("div");

    if (this.container.id == "taker" && this.time > 0) {
      this.toMovie();
    } else {
      this.time < 0
        ? (this.terminDiv.textContent = `time's up ${this.termin.toLocaleDateString()}`)
        : (this.terminDiv.textContent = this.termin.toLocaleString());
    }

    this.movieFooter.append(this.movieButton);
    this.movieButton.addEventListener("click", () => this.move());
    this.addCard();
  }
  move(e) {
    if (this.container.id == "giver") {
      if (this.time > 0) {
        this.toMovie();
      }

      this.container = document.querySelector("[id='taker']");
      this.addCard();
    } else {
      this.container = document.querySelector("[id='giver']");
      this.addCard();
    }
  }
  addCard() {
    this.container.append(this.movie);
    this.movie.append(this.movietitle);
    this.movie.append(this.moviePoster);
    this.movie.append(this.movieContent);
    this.movie.append(this.movieFooter);
    this.container.id == "giver"
      ? (this.movieButton.textContent = "dodaj")
      : (this.movieButton.textContent = "usuń");
    this.terminDiv.style.marginRight = "5px";
    this.movieContent.prepend(this.terminDiv);
  }
  toMovie() {
    this.intervalId = setInterval(() => {
      this.currentDate = new Date();
      // this.currentDate.getTime();
      const timeTo = this.termin.getTime();
      const currentTime = this.currentDate.getTime();
      this.time = timeTo - currentTime;
      let seconds = Math.floor((this.time / 1000) % 60);
      let minutes = Math.floor((this.time / (1000 * 60)) % 60);
      let hours = Math.floor((this.time / (1000 * 60 * 60)) % 24);
      let days = Math.floor((this.time / (1000 * 60 * 60 * 24)) % 30);
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      this.terminDiv.textContent = ` ${days} days and  ${hours}:${minutes}:${seconds}`;
      if (this.container.id == "giver") {
        clearInterval(this.intervalId);
        this.terminDiv.textContent = this.termin.toLocaleString();
      }
    }, 1000);
  }
};

const movies = [
  {
    title: "Film1",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ill  maiores ipsam officiis unde sapiente laboriosam eos pariatur fugiat  quisquam qui quas distinctio consectetur animi eius soluta facilis commodi est perspiciatis, non voluptate quidem, vero dolor repellatvelit! Repudiandae, corporis enim. Rem, eum error ad eius beatae facilis commodi nobis ipsa.",
    src: "./images/img1.jpg",
    termin: "2023.09.07 16:52:00",
    container: "giver",
  },
  {
    title: "Film2",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ill  maiores ipsam officiis unde sapiente laboriosam eos pariatur fugiat  quisquam qui quas distinctio consectetur animi eius soluta facilis commodi est perspiciatis, non voluptate quidem, vero dolor repellatvelit! Repudiandae, corporis enim. Rem, eum error ad eius beatae facilis commodi nobis ipsa.",
    src: "./images/img2.jpg",
    termin: "2023.08.01 10:12:00",
    container: "taker",
  },
  {
    title: "Film3",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ill  maiores ipsam officiis unde sapiente laboriosam eos pariatur fugiat  quisquam qui quas distinctio consectetur animi eius soluta facilis commodi est perspiciatis, non voluptate quidem, vero dolor repellatvelit! Repudiandae, corporis enim. Rem, eum error ad eius beatae facilis commodi nobis ipsa.",
    src: "./images/img3.jpg",
    termin: "2023.12.15 18:30:00",
    container: "giver",
  },
];

let moviesArray = [];

for (let i = 0; i < movies.length; i++) {
  const movie = new MovieCard(
    movies[i].container,
    movies[i].title,
    movies[i].content,
    movies[i].src,
    movies[i].termin
  );
  moviesArray.push(movie);
}
