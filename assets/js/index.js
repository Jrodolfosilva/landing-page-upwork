const main = document.querySelector("main");
const boxSocial = document.querySelector(".box-social-mobile")
const menuMobile = document.querySelector(".menu-mobile");
const boxMenu = document.querySelector(".box-menu")
const itemMenu = document.querySelectorAll(".item-menu");

function showMenu(){
    
    boxMenu.classList.toggle('ativo')
    main.classList.toggle('ativo')
    boxSocial.classList.toggle("ativo")
}



menuMobile.addEventListener('click',showMenu
)

itemMenu.forEach((item)=>{

    item.addEventListener('click',showMenu)
})