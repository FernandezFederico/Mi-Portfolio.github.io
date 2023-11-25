export const hamburgerMenu = (header__btn, header__panel, panel__link) => {
    document.addEventListener("click", (e) => {
        if(e.target.matches(header__btn) || e.target.matches(`${header__btn} *`))
        document.querySelector(header__panel).classList.toggle("is-active");
        document.querySelector(header__btn).classList.toggle("is-active");

        if(e.target.matches(panel__link))
        document.querySelector(header__panel).classList.remove("is-active");
        document.querySelector(header__btn).classList.remove("is-active");
        
    });
    
}