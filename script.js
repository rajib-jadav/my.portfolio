const hamburgerMenu = document.getElementById("menuIcon");
const nav = document.getElementById("navbar");

menuIcon.addEventListener ("click", () => {
    nav.classList.toggle("active");

    // icon toggle
    const icon = menuIcon.querySelector("i");
    icon.classList.toggle("re-menu-4-line");
    icon.classList.toggle("re-close-line");
});