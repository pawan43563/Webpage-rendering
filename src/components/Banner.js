


export const Banner=(bannerData)=>{
    const banner=document.createElement("div");
    banner.classList.add("banner");
    banner.style.backgroundImage=`url(${bannerData.bannerImage})`;
    const head=document.createElement("h1");
    head.innerText=bannerData.companyName;
    head.classList.add("banner-heading")
    const tag=document.createElement("p");
    tag.innerText=bannerData.tagline;
    tag.classList.add("banner-tagline")
    const btn=document.createElement("a");
    btn.href=bannerData.cta.href;
    btn.classList.add("btn");
    btn.innerText=bannerData.cta;
    banner.appendChild(head);
    banner.appendChild(tag);
    banner.appendChild(btn);
    return banner;
}