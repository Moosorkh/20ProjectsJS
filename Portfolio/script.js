const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", windows.scrollY > 120);
});

