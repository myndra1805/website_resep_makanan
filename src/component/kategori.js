import "./makanan.js"
class listKategori extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: "open"})
    }
    set listKategori(data){
        this._listKategori = data;
        this.render();
    }
    render(){
        this._shadowRoot.innerHTML = /*html*/`
        <style>
            .row{
                margin: 0px;
                padding: 0px;
                box-sizing: border-box;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }
            .col{
                flex-basis: 14%;
                padding: 10px 0px;
                text-align: center;
                box-sizing: border-box;
                list-style: none;
                margin: 0px;
                transition: 0.5s;
            }
            p{
                display: inline-block;
                margin: 0px;
            }
            .col:hover{
                cursor: pointer;
                background: linear-gradient(to right top, rgb(129, 8, 209), rgb(96, 9, 107));
                color: white;
                transform: scale(1.2)
            }
            .active{
                background: linear-gradient(to right top, rgb(129, 8, 209), rgb(96, 9, 107));
                color: white;
            }
            @media screen and (max-width: 650px){
                .row{
        
                }
                .col{
                    flex-basis: 25%;
                }
            }
        </style>
        <div class="kategori">
            <div class="row">
                ${this.tamplateKategori(this._listKategori)}
            </div>
        </div>
        `
        const item = this._shadowRoot.querySelectorAll("p");
        const col = [...this._shadowRoot.querySelectorAll(".col")];
        col.map((e, i) => {
            e.addEventListener("click", async() => {
                const makanan = (await this.getData(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${item[i].innerHTML}`)).meals
                const listMakananLama = document.querySelector("list-makanan")
                const listMakananBaru = document.createElement("list-makanan")
                const main = document.querySelector("main")
                listMakananBaru.listMakanan =  makanan;
                main.replaceChild(listMakananBaru, listMakananLama)
                col.forEach(e => {
                    e.classList.remove("active")
                })
                e.classList.add("active")
            })
        })
    }
    tamplateKategori(data){
        let tamplate = ""
        data.map((e, i) => {
            if(i == 0){
                tamplate += `<div class="col active"><p>${e.strCategory}</p></div>`
            }else{
                tamplate += `<div class="col"><p>${e.strCategory}</p></div>`
            }
        })
        return tamplate;
    }
    getData(url){
        return fetch(url)
            .then(res => res.json())
    }
}
customElements.define("list-kategori", listKategori)