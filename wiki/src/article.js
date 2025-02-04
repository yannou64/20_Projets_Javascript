class Article {
    constructor(src){
        this.title = src.title
        this.pageid = src.pageid
        this.size = src.size
        this.snippet = src.snippet
        this.timestamp = src.timestamp
        this.wordcount = src.wordcount 
        this.article_element = ""
        this.article_presentation_html()     
    }

    article_presentation_html(){
        this.article_element = document.createElement("div")
        this.article_element.innerHTML = `
            <h3>${this.title}</h3>
            <div>${this.pageid} </div>
            <div>${this.size} </div>
            <div>${this.snippet} </div>
            <div>${this.timestamp} </div>
            <div>${this.wordcount} </div>
        `
    }
}

export {Article}