import {img_logo} from "./logo.js";
import {searchResults} from "./apiWiki.js"
import {Loader} from "./loader.js"
import {Article} from "./article.js"

/////////////
//  code dynamique 
////////////

// cancel submit
const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
})

// "Enter" action on input
const search = document.querySelector(".form__search")

search.addEventListener("keydown", async (event) => {
    if (event.key === "Enter" && event.value != ""){
        const isWaiting = new Loader
        isWaiting.charge()
        showResults(event)
        isWaiting.uncharge()
    }
})

/////////////
//  fonctions 
////////////

async function showResults(event){
    const results = await searchResults(event.target.value)
    const article_element = document.querySelector("article")
    for (const result of results){
        const article = new Article(result)
        article_element.appendChild(article.article_element)
        
    }
}

/////////////
//  code statique 
////////////
const logo = document.querySelector(".logo");
logo.appendChild(img_logo);
