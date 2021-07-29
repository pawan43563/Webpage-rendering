

export const Logo = (data) => {
    const markup = document.createElement("div");
    markup.classList.add("company-logo");
    let logoImg = document.createElement("img");
    logoImg.classList.add("logo");
    logoImg.src=data.imgSrc,
    logoImg.alt=data.alt;
    markup.appendChild(logoImg);
    return markup;
  
};