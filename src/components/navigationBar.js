
import { Logo } from "./logo.js";
import {NavLinks} from "./NavLinks.js";
import {Hamburger} from "./Hamburger.js"
export const NavigationBar=(navData,HamburgerImg)=>{
    const markup=document.createElement("div")
    markup.classList.add("navigation")
    markup.appendChild(Logo(navData.logo))
    markup.appendChild(NavLinks(navData))
    markup.appendChild(Hamburger(HamburgerImg))
    return markup
}