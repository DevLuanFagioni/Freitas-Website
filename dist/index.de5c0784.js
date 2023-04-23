class MobileNavbar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init() {
        if (this.mobileMenu) this.addClickEvent();
        return this;
    }
}
const mobileNavbar = new MobileNavbar(".mobile_menu", ".nav_list", ".nav_list li");
mobileNavbar.init();
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
document.getElementById("year_copy").innerHTML = `&copy; ${anoAtual} `;

//# sourceMappingURL=index.de5c0784.js.map
