import {img_logo} from "./logo.js";
import {searchResults} from "./apiWiki.js"

// exercise to insert an asset
const logo = document.querySelector(".logo");
logo.appendChild(img_logo);

// cancel refresh submit
const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
})

// "Enter" action on input
const search = document.querySelector(".search")
search.addEventListener("keydown", async (event) => {
    if (event.key === "Enter"){
        const results = await searchResults(event.target.value)
        console.log(results)
    }
})