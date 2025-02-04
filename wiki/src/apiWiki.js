import { image_load }  from "./loader.js"


function searchResults(toSearch){
  try {
    return resultatToSend(toSearch)
  } 
  catch (error) {
    console.log("erreur ! = " + error);
  }
};

async function resultatToSend(toSearch){
    loader.charge
    const response = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${toSearch}`
    );
    const data = await response.json()
    return data.query.search
}

class loader {
    charge(){
        const form_loader = document.querySelector(".form__loader")
        form_loader.appendChild = image_load
    }
    uncharge(){
        const form_loader = document.querySelector(".form__loader")
        form_loader.removeChild()
    }
}

export { searchResults };
