const links=document.querySelectorAll("nav a");

links.forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

window.scrollTo({

top:target.offsetTop-60,

behavior:"smooth"

});

});

});

// Display current year in footer
const year = new Date().getFullYear();
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${year} Sudhagar B. All Rights Reserved.`;
}