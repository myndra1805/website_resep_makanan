import gambarMenu from "./../../gambar/menu.png"
class Navbar extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this._shadowRoot.innerHTML =/*html*/ `
            <style>
                .container-navbar{
                    padding: 0px;
                    margin: 0px;
                    position: sticky;
                    top: 0px;
                    background-color: yellow;
                    z-index: 10;
                }
                .container-navbar::after{
                    content: "";
                    display: block;
                    clear: both;
                }
                h1{
                    margin: 0px;
                    float: left;
                    margin-left: 20px;
                }
                .nama-web{
                    display: inline-block;
                    font-family: algerian;
                }
                ul{
                    float: right;
                    padding: 0px;
                    margin: 0px;
                    margin-top: 10px;
                    display: inline-block;
                }
                li{
                    display: inline-block;
                    list-style: none;
                    margin-right: 15px;
                }
                a{
                    text-decoration: none;
                    color: black;
                }
                .nav-link{
                    padding: 5px;
                }
                .nav-link:hover{
                    color: white;
                    border-radius: 20px;
                    background: linear-gradient(to right top, rgb(129, 8, 209), rgb(96, 9, 107));
                }
                @media screen and (max-width: 800px){
                    ul{
                        width: 100%;
                        float: right;
                        padding: 0px;
                        margin: 0px;
                        display: block;
                        background: linear-gradient(to right top, rgb(129, 8, 209), rgb(96, 9, 107));
                    }
                    .btn-show{
                        height: 40px;
                        line-height: 0px;
                        width: 35px;
                        float: right;
                        background-image: url("${gambarMenu}");
                        background-size: 35px;
                        background-repeat: no-repeat;
                        background-position-x: 100%;
                        background-position-y: 2px;
                    }
                    li{
                        right: 0px;
                        display: block;
                        list-style: none;
                        margin: 10px 0px;
                    }
                    .nav-link{
                        text-decoration: none;
                        color: white;
                    }
                    .nav-link:hover{
                        color: black;
                        border-radius: 20px;
                        background: none;
                        background-color: white;
                    }
                    .hide{
                        display: none;
                    }
                }
            </style>
            <div class="container-navbar">
                <h1><a href="" class="nama-web">MyRecipe</a></h1>
                <div class="btn-show"></div>
                <ul class="menu hide">
                    <li><a href="#home" class="nav-link">HOME</a></li>
                    <li><a href="#category" class="nav-link">CATEGORY MEALT</a></li>
                    <li><a href="#about" class="nav-link">ABOUT</a></li>
                </ul>
            </div>
        `
        const btnShow = this._shadowRoot.querySelector(".btn-show")
        const menu = this._shadowRoot.querySelector(".menu")
        btnShow.addEventListener("click", () => {
            menu.classList.toggle("hide")
        })
    }

}
customElements.define("nav-bar", Navbar);