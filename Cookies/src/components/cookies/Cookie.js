class Cookie {
  static delay = "Thu, 18 Mar 2025 12:00:00 UTC";
  static path = "/";
  static indicatorDelay = 2000;

  constructor(name, value) {
    this.name = name;
    this.value = value;
  }

  setCookie() {
    const cookie = `${this.name}=${this.value}; expires=${Cookie.delay}; path=${Cookie.path};`;
    this.#indicatorActionToUser("set");
    document.cookie = cookie;
  }

  suppCookie() {
    const cookie = `${this.name}=; expires=01 Janv 1970 00:00:00 UTC; path=/;`;
    document.cookie = cookie;
    if (!Cookie.checkCookie(this.name)) {
      this.#indicatorActionToUser("supp");
    }
  }

  #indicatorActionToUser(action) {
    switch (action) {
      case "supp":
        this.#indicator("supp");
        break;
      case "set":
        if (Cookie.checkCookie(this.name)) {
          this.#indicator("modif");
        } else {
          this.#indicator("create");
        }
        break;
      default:
        console.log("error with value of indicatorActionToUser in cookie.js");
    }
  }

  #indicator(action) {
    const indicator = this.#displayIndicator(action);
    this.#suppIndicatorAfterDelay(action, indicator);
  }

  #displayIndicator(action) {
    const indicator = document.querySelector(".indicator");
    indicator.classList.add(`indicator--${action}`);
    indicator.innerHTML = `
      cookie: ${this.name} a été ${action}
    `;
    indicator.style.display = "flex";
    return indicator;
  }

  #suppIndicatorAfterDelay(action, indicator) {
    setTimeout(() => {
      indicator.style.display = "none";
      indicator.classList.remove(`indicator--${action}`);
    }, Cookie.indicatorDelay);
  }

  static checkCookie(toFind) {
    let cookies = Cookie.getCookies();
    for (let cookie of cookies) {
      let name = cookie.split("=")[0].trim();
      if (name == toFind) {
        return true;
      }
    }
    return false;
  }

  static getCookies() {
    let cookies = decodeURIComponent(document.cookie);
    cookies = cookies.split(";");
    return cookies;
  }
}

export { Cookie };
