import { img_logo } from "./logo.js";
import { searchResults } from "./apiWiki.js";
import { Loader } from "./loader.js";
import { Article } from "./article.js";

/////////////
//  code dynamique
////////////

// cancel submit
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

// "Enter" action on input
const search = document.querySelector(".form__search");

search.addEventListener("keydown", async (event) => {
  if (event.key === "Enter" && event.value != "") {
    initialisationResults();
    const isWaiting = new Loader();
    isWaiting.charge();
    showResults(event);
    isWaiting.uncharge();
  }
});

/////////////
//  fonctions
////////////

async function showResults(event) {
  const results = await searchResults(event.target.value);
  articlesConstruction(results);
}

function articlesConstruction(results) {
  const articles_element = document.querySelector(".results");
  for (const result of results) {
    const article = new Article(result);
    articles_element.appendChild(article.article_element);
  }
}

function initialisationResults() {
  const results = document.querySelector(".results");
  results.innerHTML = "";
}

/////////////
//  code statique
////////////
const logo = document.querySelector(".logo");
logo.appendChild(img_logo);
