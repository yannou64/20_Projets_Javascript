class Cookie {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.delay = "Thu, 18 Mar 2025 12:00:00 UTC";
    this.path = "/";
  }

  setCookie() {
    const cookie = `${this.name}=${this.value}; expires=${this.delay}; path=${this.path};`;
    if (Cookie.checkCookie(this.name)){
      this.indicatorCookieModif()
    } else {
      this.indicatorCookieCreate()
    }    
    document.cookie = cookie;
  }

  static checkCookie(toFind) {
    let cookies = Cookie.getCookies()
    for (let cookie of cookies){
      let name = cookie.split("=")[0].trim()
      if (name == toFind){
        return true
      }
    }
    return false
  }

  static getCookies() {
    let cookies = decodeURIComponent(document.cookie);
    cookies = cookies.split(";");
    return cookies;
  }

  static suppCookie(name) {
    const cookie = `${name}=; expires=01 Janv 1970 00:00:00 UTC; path=/;`;
    document.cookie = cookie;
    if(!Cookie.checkCookie(name)){
      Cookie.indicatorCookieSupp(name)
    }
  }

  indicatorCookieCreate () {
    const indicatorCookieAction = document.querySelector(".indicatorCookieAction")
    indicatorCookieAction.classList.add("indicatorCookieAction--create")
    indicatorCookieAction.innerHTML = `
      cookie: ${this.name} a été créé
    `
    indicatorCookieAction.style.display = "flex"
    setTimeout(() => {
      indicatorCookieAction.style.display = "none"
      indicatorCookieAction.classList.remove("indicatorCookieAction--create")
    }, 2000)
  }

  indicatorCookieModif (){
    const indicatorCookieAction = document.querySelector(".indicatorCookieAction")
    indicatorCookieAction.classList.add("indicatorCookieAction--modif")
    indicatorCookieAction.innerHTML = `
      cookie: ${this.name} a été modifié
    `
    indicatorCookieAction.style.display = "flex"
    setTimeout(() => {
      indicatorCookieAction.style.display = "none"
      indicatorCookieAction.classList.remove("indicatorCookieAction--modif")
    }, 2000)
  }

  static indicatorCookieSupp(name) {
    const indicatorCookieAction = document.querySelector(".indicatorCookieAction")
    indicatorCookieAction.classList.add("indicatorCookieAction--supp")
    indicatorCookieAction.innerHTML = `
      cookie: ${name} a été supprimé
    `
    indicatorCookieAction.style.display = "flex"
    setTimeout(() => {
      indicatorCookieAction.style.display = "none"
      indicatorCookieAction.classList.remove("indicatorCookieAction--supp")
    }, 2000)
  }
}

export { Cookie };
