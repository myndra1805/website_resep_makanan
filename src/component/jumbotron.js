import gambarJmb from "./../../gambar/masak.jpg";
class Jumbotron extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: "open"})
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this._shadowRoot.innerHTML = /*html*/`
            <style>
                .container{
                    margin-top: -40px;
                    padding: 0px;
                }
                .jumbotron{
                    margin: 0px;
                    background-image: url("${gambarJmb}");
                    background-repeat: no-repeat;
                    background-size: cover;
                    height: 610px;
                    background-position: 0px -100px;
                    position: relative;
                }
                h3{
                    position: absolute;
                    top: 100px;
                    left: 13%;    
                    color: rgb(129, 8, 209);
                    font-size: 40px;
                }
                p{
                    position: absolute;
                    top: 150px;
                    left: 13%;    
                    color: rgb(129, 8, 209);
                    font-size: 28px;
                }
                @media screen and (max-width: 1000px){
                    .jumbotron{
                        background-position: 0px 0px;
                    }
                    h3{
                        top: 150px;
                    }
                    p{
                        top: 200px;
                    }
                }
                @media screen and (max-width: 700px){
                    h3{
                        font-size: 30px;
                        top: 100px;
                    }
                    p{
                        top: 140px;
                        font-size: 18px;
                    }
                }
                @media screen and (max-width: 452px){
                    h3{
                        top: 100px; 
                        font-size: 22px; 
                        left: 20%;  
                    }
                    p{
                        left: 20%;
                        top: 140px;
                        font-size: 13px;
                    }
                }
            </style>
            <div class="container">
                <div class="jumbotron">
                    <h3>#STAY AT HOME</h3>
                    <p>Let's Learn to Cook</p>
                </div>
            </div>
        `
    }
}
customElements.define("jumbotron-item", Jumbotron);