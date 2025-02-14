/////////////
//  import
////////////
import "./style.scss";
import { Cookie } from "./components/cookies/cookie.js";
import { image } from "./components/cookies/LogoCookie.js";

/////////////
//  preventDefaut
////////////
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

/////////////
//  assets
////////////
const displayLogo = document.querySelector(".display-logo").appendChild(image);

/////////////
//  Action button .Create
////////////
const buttonCreate = document.querySelector(".btn__create");
buttonCreate.addEventListener("click", createCookie);

function createCookie() {
  const name = document.querySelector("#name").value;
  const value = document.querySelector("#value").value;
  if (checkInput(name, value)) {
    const cookie = new Cookie(name, value);
    cookie.setCookie();
  }
  initInputs();
  init_displayCookieBoard();
}

function checkInput(name, value) {
  if (!name?.trim() || !value?.trim()) {
    console.log("error d'input");
    return false;
  }
  return true;
}

function initInputs() {
  const inputs = document.querySelectorAll("input");
  for (let input of inputs) {
    input.value = "";
  }
}

/////////////
//  Action button .Display
////////////
const button_Display = document.querySelector(".btn__display");
button_Display.addEventListener("click", displayCookieBoard);

function displayCookieBoard() {
  init_displayCookieBoard();
  const displayCookieBoard = document.querySelector(".displayCookieBoard");
  const cookies = Cookie.getCookies();
  if (!checkCookiesEmpty(cookies)){
    createCardsCookie(cookies, displayCookieBoard);
  };
}

function init_displayCookieBoard() {
  const displayCookieBoard = document.querySelector(".displayCookieBoard");
  if (displayCookieBoard.innerHTML != null) {
    displayCookieBoard.innerHTML = "";
  }
}

function checkCookiesEmpty(cookies) {
  if (!cookies[0].trim()) {
    return true;
  }
  return false
}

function createCardsCookie(cookies, board) {
  for (let cookie of cookies) {
    const nameCookie = cookie.split("=")[0].trim();
    const valueCookie = cookie.split("=")[1].trim();
    const card = display_TheCookie(nameCookie, valueCookie);
    board.appendChild(card);
  }
  addSuppListeners();
}

function display_TheCookie(name, value) {
  const element = document.createElement("div");
  element.classList.add("displayCookieBoard__displayBloc");
  element.innerHTML = `
            <div><span>Nom :</span> ${name}</div>
            <div><span>Valeur :</span> ${value}</div>
            <div class="supp" id="${name}">x</div>
        `;
  return element;
}

/////////////
//  Action element .supp
////////////
function addSuppListeners() {
  const elementsSupp = document.querySelectorAll(".supp");
  console.log(elementsSupp);
  for (let element of elementsSupp) {
    element.addEventListener("click", supp_Cookie);
  }
}

function supp_Cookie(event) {
  Cookie.suppCookie(event.target.id);
  suppCookieDisplay(event.target.id);
}

function suppCookieDisplay(id) {
  const element = document.getElementById(id).parentElement;
  element.remove();
}
