function interacaoMenu(){

        const main = document.querySelector("main");
        const boxSocial = document.querySelector(".box-social-mobile")
        const menuMobile = document.querySelector(".menu-mobile");
        const boxMenu = document.querySelector(".box-menu")
        const itemMenu = document.querySelectorAll(".item-menu");
        const barras =document.querySelectorAll(".br")


        function showMenu(){
            
            boxMenu.classList.toggle('ativo')
            main.classList.toggle('desativado')
            boxSocial.classList.toggle("ativo")
            barras.forEach((i)=>{
                i.classList.toggle("ativo")
            })
        }

        menuMobile.addEventListener('click',showMenu
        )

        itemMenu.forEach((item)=>{

            item.addEventListener('click',showMenu)
        })
}
interacaoMenu()