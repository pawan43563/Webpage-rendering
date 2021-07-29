
export const Hamburger=(image)=>{
    const menu=document.createElement("div");
    menu.classList.add("hamburger-menu")
    const img=document.createElement("img")
    img.src=image.imageSrc;
    menu.appendChild(img);
    return menu
}