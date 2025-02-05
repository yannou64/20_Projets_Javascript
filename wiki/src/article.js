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
        this.article_element = document.createElement("article")
        this.article_element.classList.add("quicksand")
        this.article_element.innerHTML = `
            <span class="article__titre">${this.title}</span>
            <a class="article__link" href="https://en.wikipedia.org/?curid=${this.pageid}">https://en.wikipedia.org/?curid=${this.pageid}</a>
            <span class="article__resume">${this.snippet} </span>
        `
    }
}

export {Article}