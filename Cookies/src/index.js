/////////////
//  import 
////////////    
import {Cookie} from "./components/cookies/Cookie.js"

/////////////
//  preventDefaut 
////////////

const form = document.querySelector("form")
form.addEventListener('submit', (event) => {
    event.preventDefault()
})

/////////////
//  Action button .Create
////////////
const buttonCreate = document.querySelector(".create")
buttonCreate.addEventListener('click', createCookie)

function createCookie(){
    const name = document.querySelector("#name").value
    const value = document.querySelector('#value').value
    const cookie = new Cookie(name, value)
    cookie.setCookie()
}

/////////////
//  Action button .Display 
////////////
const buttonDisplay = document.querySelector(".display")
buttonDisplay.addEventListener("click", displayCookies)

function displayCookies() {
    const cookies = Cookie.getCookies()
    display(cookies)
}

function display(cookies){
    initCookiesBoard()
    const cookiesBoard = document.querySelector(".cookiesBoard")
    for (let cookie of cookies){
        let nameCookie = cookie.split("=")[0]
        nameCookie = eraseSpace(nameCookie)
        const valueCookie = cookie.split("=")[1]
        const element = document.createElement("div")
        element.classList.add("displayBloc")
        element.innerHTML = `
            <div>Nom : ${nameCookie}</div>
            <div>Valeur : ${valueCookie}</div>
            <div class="supp" id="${nameCookie}">supp</div>
        `
        cookiesBoard.appendChild(element)
    }
    const elementsSupp = document.querySelectorAll(".supp")
    for (let element of elementsSupp){
        element.addEventListener('click', suppCookie)
    }
}

function eraseSpace(element){
    while (element.charAt(0) == " "){
        element = element.substring(1)
    }
    return element
}

/////////////
//  Action element .supp 
////////////
function suppCookie(event){
    Cookie.suppCookie(event.target.id)
    suppCookieDisplay(event.target.id)
}

function suppCookieDisplay(id){
    const element = document.getElementById(id).parentElement
    element.remove()
}

function initCookiesBoard(){
    const cookiesBoard = document.querySelector(".cookiesBoard")
    if (cookiesBoard.innerHTML != null){
        cookiesBoard.innerHTML = ""
    }
}
