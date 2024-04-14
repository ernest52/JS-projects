document.querySelector(".menu").addEventListener("click", showInfo);
const info = [
  {
    title: "Tytuł: Choose Movie",
    js: "js info: użycie typów referencyjnych, jeden z pierwszych projektów wykorzystując OOP syntax",
    description:
      "Opis: Projekt ma na celu dodanie filmu z listy polecanych filmów a po dodaniu wyświetla się w movie card dodatkowy timer mówiący o tym ile dni pozostało do daty wyświetlenia filmu.",
  },
  {
    title: "Tytuł: Add Comment",
    js: "js info: użycie typów referencyjnych, napisany wykorzystując programowanie proceduralne, manipulacja wyglądem strony za pomocą event handlers",
    description:
      "Opis:  Cel projektu jest umożliwienie napisanie komentarza za pomocą formularza i dodania go do listy komentarzy, komentarz składa się z nicname oraz treści, które muszą spełniać odpowiednie wymagania jak długość. Do komentarza renderowany jest losowy avatar",
  },
  {
    title: "Tytuł: Slider",
    js: "js info: użycie typów referencyjnych, napisany wykorzystując programowanie proceduralne, połączenie css z js za pomocą callback functions.",
    description:
      "Opis: Projekt slider, pokaz zmieniających się obrazków z dodaną animają napełniającego się paska w czasie trwania slajdu. Sami mamy wpływ na to który slajd zostanie w danym momencie wyświetlony wykorzystując strzałki, które są obrazkami w formacie SVG oraz poprzez klikanie w odpowiednie kółka.",
  },
  {
    title: "Tytuł: Jednoręki Bandyta",
    js: "js info: użycie typów referencyjnych, napisany wykorzystując programowanie obiektowe, dodatkowo projekt składa się z kilku plików js połączonych w jeden za pomocą import i export, wykorzystanie kilku klas, które współpracują ze sobą za pomocą pojedyńczej instancji.",
    description:
      "Opis: Najbardziej złożony projekt z całej listy, symulator gry znanej z kasyn. Wygrywamy wtedy kiedy wszystkie kolory są takie same lub każdy inny. Projekt oparty na współpracy klas, wiązaniu this i hermetyzacji dzięki zastowoniu domknięć oraz właściwości prywatnych",
  },
  {
    title: "Tytuł: Simon Game",
    js: "js info: mini gierka polegająca na odwzorowaniu schematu pokazanego przez program",
    description: "Opis: Jeden z najtrudniejszych projektów w tym zestawie",
  },
];

function showInfo(e) {
  const key = e.target.dataset.key;
  const main = document.querySelector(".main__home span");
  if (e.target.nodeName == "LI" && key !== undefined) {
    main.textContent = "";
    const title = document.createElement("p");
    title.textContent = info[key][`title`];
    main.append(title);
    const js = document.createElement("p");
    js.textContent = info[key][`js`];
    js.style.margin = "1rem 0";
    main.append(js);
    const description = document.createElement("p");
    description.textContent = info[key][`description`];
    main.append(description);
  }
}
