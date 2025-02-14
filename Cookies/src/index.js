
/////////////
//  import 
////////////    
import './style.scss'
import {Cookie} from "./components/cookies/Cookie.js"
import {image} from "./components/cookies/LogoCookie.js"
/////////////
//  preventDefaut + assets
////////////

const form = document.querySelector("form")
form.addEventListener('submit', (event) => {
    event.preventDefault()
})

const displayLogo = document.querySelector(".display-logo").appendChild(image)
/////////////
//  Action button .Create
////////////
const buttonCreate = document.querySelector(".create")
buttonCreate.addEventListener('click', createCookie)

function createCookie(){
    const name = document.querySelector("#name").value
    const value = document.querySelector('#value').value
    if (checkInput(name, value)){
        const cookie = new Cookie(name, value)
        initCookiesBoard()
        cookie.setCookie()
    }
    initInputs()
}


function checkInput(name, value) {
    if(!name?.trim() || !value?.trim()){
        console.log("error d'input")
        return false
    }
    return true
}


function initInputs(){
    const inputs = document.querySelectorAll("input")
    for (let input of inputs){
        input.value = ""
    }
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
        element.classList.add("cookiesBoard__displayBloc")
        element.innerHTML = `
            <div><span>Nom :</span> ${nameCookie}</div>
            <div><span>Valeur :</span> ${valueCookie}</div>
            <div class="supp" id="${nameCookie}">x</div>
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
