const container = document.querySelector(".topnav__menu");
const iconHamburger = document.querySelector("#img_menu");
const closeSvg = document.querySelector(".menu_img");
const menu_links = document.querySelector(".menu_links");

container.addEventListener("click", (ev) => {


    if (menu_links.style.display === "block") {
        menu_links.style.display = "none";
        iconHamburger.style.display = "flex";
        closeSvg.style.display = "none";



    } else {
        menu_links.style.display = "block";
        closeSvg.style.display = "flex";
        iconHamburger.style.display = "none";


    }

})