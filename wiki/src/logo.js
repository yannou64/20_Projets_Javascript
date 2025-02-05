import logo from "./assets/logo.png";

const img_logo = document.createElement("img");
img_logo.src = logo;
img_logo.alt = "logo"
img_logo.style = "width: clamp(20px, 100vw, 250px)"

export {img_logo}
