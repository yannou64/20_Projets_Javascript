import {img_logo} from "./logo.js";
import {searchResults} from "./apiWiki.js"

const a = 3
const b = 6
const c = a + b


// exercise to insert an asset with webpack
const logo = document.querySelector(".logo");
logo.appendChild(img_logo);

// cancel submit
const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
})

// "Enter" action on input
const search = document.querySelector(".form__search")

search.addEventListener("keydown", async (event) => {
    if (event.key === "Enter"){
        const results = await searchResults(event.target.value)
        console.log(results)
    }
})