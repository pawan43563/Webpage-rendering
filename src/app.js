
import {Logo} from "./components/logo.js";
import {NavLinks} from "./components/NavLinks.js";
import {NavigationBar} from "./components/navigationBar.js";
import {Banner} from "./components/Banner.js";
import { Footer } from "./components/Footer.js";

let url="https://pawan43563.github.io/Jsonfiles/Navbar-banner.json";
let rootDiv=document.getElementById("root");
fetch(url)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    passingdata(data);
}).catch((err)=>{
    console.log(err);
})
.catch((err)=>{
    console.log("Error while fetching data",err);
})


const passingdata=(data)=>{
    rootDiv.appendChild(NavigationBar(data.navData,data.Humburger));
    rootDiv.appendChild(Banner(data.bannerData))
    rootDiv.appendChild(Footer(data.FooterData))
}


