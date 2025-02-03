async function searchResults(toSearch){
  try {
    return resultatToSend(toSearch)
  } 
  catch (error) {
    console.log("erreur ! = " + error);
  }
};

async function resultatToSend(toSearch){
    const response = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${toSearch}`
    );
    const data = await response.json()
    return data.query.search
}

export { searchResults };
