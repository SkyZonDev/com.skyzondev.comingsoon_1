import { config } from "../../config.js";

const logo = document.getElementById('logo');
function init() {
    document.title = config.title
    document.body.style.background = `center / cover url(${config.bg}) no-repeat`;
    let img = document.createElement('img');
    img.src = config.urlLogo;
    img.width = config.logoWidth;
    img.height = config.logoHeight;
    img.alt = config.logoAlt;
    logo.appendChild(img)
}

init()