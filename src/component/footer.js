class Footer extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: "open"})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML = /*html*/ `
            <style>
                div{
                    padding: 10px 0px;
                    background: linear-gradient(to right top, rgb(129, 8, 209), rgb(96, 9, 107));
                }
                p{
                    color: white;
                    text-align: center;
                }
            </style>
            <div>
                <p>Copyright &copy; 2020. MyRecipe. All rights reserved</p>
            </div>
        `
    }
}
customElements.define("footer-item", Footer)