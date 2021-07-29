

export const NavLinks=(props)=>{
    let markup=document.createElement("ul");
    markup.classList.add("nav-container");
    props.navLinks.forEach((link)=>{
        let li=document.createElement("li");
        li.classList.add("nav-item");
        let navLink=document.createElement("a");
        navLink.classList.add("nav-link");
        navLink.href=link.href;
        navLink.innerHTML=link.title;
        link.isCta
        ? navLink.classList.add("nav-link","btn")
        :navLink.classList.add("nav-link")

        li.appendChild(navLink);
        markup.appendChild(li);
    })
    return markup;
}