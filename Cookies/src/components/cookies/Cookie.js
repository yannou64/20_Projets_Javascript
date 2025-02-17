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
    if (Cookie.checkCookie(this.name)) {
      this.indicator("modif");
    } else {
      this.indicator("create");
    }
    document.cookie = cookie;
  }

  suppCookie() {
    const cookie = `${this.name}=; expires=01 Janv 1970 00:00:00 UTC; path=/;`;
    document.cookie = cookie;
    if (!Cookie.checkCookie(this.name)) {
      this.indicator("supp");
    }
  }

  indicator(action) {
    const indicatorCookieAction = document.querySelector(
      ".indicatorCookieAction"
    );
    indicatorCookieAction.classList.add(`indicatorCookieAction--${action}`);
    indicatorCookieAction.innerHTML = `
      cookie: ${this.name} a été ${action}
    `;
    indicatorCookieAction.style.display = "flex";
    setTimeout(() => {
      indicatorCookieAction.style.display = "none";
      indicatorCookieAction.classList.remove("indicatorCookieAction--create");
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
