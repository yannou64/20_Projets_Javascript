class Cookie {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.delay = "Thu, 18 Mar 2025 12:00:00 UTC";
    this.path = "/";
  }

  createCookie() {}

  setCookie() {
    const cookie = `${this.name}=${this.value}; expires=${this.delay}; path=${this.path};`
    document.cookie = cookie
  }

 static getCookies() {
    let cookies = decodeURIComponent(document.cookie)
    cookies = cookies.split(";")
    return cookies
  }

  checkCookie() {}

  static suppCookie(name) {
    const cookie = `${name}=; expires=01 Janv 1970 00:00:00 UTC; path=/;`
    document.cookie = cookie
  }
}



export {Cookie}