class Modal extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: "open"})
    }
    set detailMakanan(data){
        this._dataMakanan = data;
        this.render()
    }
    bahan(){
        let tamplate = "";
        let bahan = [
            (this._dataMakanan.strMeasure1 + " " + this._dataMakanan.strIngredient1),
            (this._dataMakanan.strMeasure2 + " " + this._dataMakanan.strIngredient2),
            (this._dataMakanan.strMeasure3 + " " + this._dataMakanan.strIngredient3),
            (this._dataMakanan.strMeasure4 + " " + this._dataMakanan.strIngredient4),
            (this._dataMakanan.strMeasure5 + " " + this._dataMakanan.strIngredient5),
            (this._dataMakanan.strMeasure6 + " " + this._dataMakanan.strIngredient6),
            (this._dataMakanan.strMeasure7 + " " + this._dataMakanan.strIngredient7),
            (this._dataMakanan.strMeasure8 + " " + this._dataMakanan.strIngredient8),
            (this._dataMakanan.strMeasure9 + " " + this._dataMakanan.strIngredient9),
            (this._dataMakanan.strMeasure10 + " " + this._dataMakanan.strIngredient10),
            (this._dataMakanan.strMeasure11 + " " + this._dataMakanan.strIngredient11),
            (this._dataMakanan.strMeasure12 + " " + this._dataMakanan.strIngredient12),
            (this._dataMakanan.strMeasure13 + " " + this._dataMakanan.strIngredient13),
            (this._dataMakanan.strMeasure14 + " " + this._dataMakanan.strIngredient14),
            (this._dataMakanan.strMeasure15 + " " + this._dataMakanan.strIngredient15),
            (this._dataMakanan.strMeasure16 + " " + this._dataMakanan.strIngredient16),
            (this._dataMakanan.strMeasure17 + " " + this._dataMakanan.strIngredient17),
            (this._dataMakanan.strMeasure18 + " " + this._dataMakanan.strIngredient18),
            (this._dataMakanan.strMeasure19 + " " + this._dataMakanan.strIngredient19),
            (this._dataMakanan.strMeasure20 + " " + this._dataMakanan.strIngredient20),
        ];
        bahan = bahan.filter(e => e != " " && e != " null" && e != "null null" && e != "null " && e != "  ")
        bahan.map(e => {
            tamplate += `<li>${e}</li>`
        })
        return tamplate
    }
    render(){
        this._shadowRoot.innerHTML = /*html*/`
            <style>
                .penutup{
                    background-color: black;
                    opacity: 0.5;
                    position: fixed;
                    z-index: 11;
                    top: 0px;
                    left: 0px;
                    right: 0px;
                    bottom: 0px;
                }
                .hide{
                    display: none;
                }
                .modal{
                    box-shadow: 0px 0px 3px black;
                    left: 50px;
                    right: 50px;
                    top: 30px;
                    bottom: 30px;
                    position: fixed;
                    z-index: 12;
                    overflow: auto;
                    background: linear-gradient(to right top, rgb(129, 8, 209), rgb(96, 9, 107)50%);
                }
                .row{
                    display: grid;
                    grid-template-areas: "gambar ket bahan"
                                         "deskripsi deskripsi deskripsi";
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: 0.1fr ;
                }
                .col{
                    color: white;
                    border: 1px solid white;
                }
                .gambar{
                    grid-area: gambar;
                    line-height: 0px;
                }
                .ket{
                    padding: 10px 0px 0px 10px;
                    grid-area: ket;
                    display: grid;
                    grid-template-areas: "nama1 tengah1 det1"
                                         "nama2 tengah2 det2"
                                         "nama3 tengah3 det3";
                    grid-template-columns: 0.2fr 0.05fr 0.7fr;
                    grid-template-rows: 0.1fr 0.1fr;
                }
                .flex-col{
                    margin: 0px;
                }
                .nama{
                    flex-basis: 17%;
                }
                .tengah{
                    flex-basis: 3%;
                }
                .penjelasan{
                    flex-basis: 80%;
                }
                .bahan{
                    padding: 0px;
                    grid-area: bahan;
                }
                .bahan p {
                    padding: 10px 0px 10px 10px;
                }
                .bahan ul{
                    padding-bottom: 10px;
                    margin: 0px;
                }
                .deskripsi{
                    border: none;
                    grid-area: deskripsi;
                    padding: 20px 20px;
                }
                .desk{
                    text-align: justify;
                    margin: 0px
                }
                .close{
                    position: fixed;
                    right: 20px;
                    top: 5px;
                    width:30px;
                    height: 30px;
                    text-align: center;
                    display: flex;
                    text-align: center;
                    border-radius: 50%;
                    color: red;
                    background-color: white;
                    z-index: 200;
                    justify-content: center;
                    align-items: center;
                }
                .close:hover{
                    cursor: pointer;
                }
                p{
                    margin: 0px
                }
                @media screen and (max-width: 780px){
                    .deskripsi{
                        border: 1px solid white;
                    }
                    .row{
                        display: grid;
                        grid-template-areas: "gambar ket"
                                             "bahan bahan"
                                            "deskripsi deskripsi";
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: 0.1fr 0.3fr 1fr;
                    }
                }
            </style>
            <div class="penutup">

            </div>
            <div class="modal">
                <div class="close">X</div>
                <div class="row">
                    <div class="col gambar">
                        <img src="${this._dataMakanan.strMealThumb}" alt="" width="100%" height="100%">
                    </div>
                    <div class="col ket">
                        <div class="flex-col nama">
                            <p>Name</p>
                        </div>
                        <div class="flex-col tengah">
                            <p>:</p>
                        </div>
                        <div class="flex-col penjelasan">
                            <p>${this._dataMakanan.strMeal}</p>
                        </div>
                        <div class="flex-col nama">
                            <p>From</p>
                        </div>
                        <div class="flex-col tengah">
                            <p>:</p>
                        </div>
                        <div class="flex-col penjelasan">
                            <p>${this._dataMakanan.strArea}</p>
                        </div>
                        <div class="flex-col nama">
                            <p>Category</p>
                        </div>
                        <div class="flex-col tengah">
                            <p>:</p>
                        </div>
                        <div class="flex-col penjelasan">
                            <p>${this._dataMakanan.strCategory}</p>
                        </div> 
                    </div>
                    <div class="col bahan">
                        <p>Ingredients Needed for Cooking:</p>
                        <ul>
                            ${this.bahan()}
                        </ul>
                    </div>
                    <div class="col deskripsi">
                        <p class="desk">Description: ${this._dataMakanan.strInstructions}</p>
                    </div>
                </div>
            </div>
        `
        const close = this._shadowRoot.querySelector(".close")
        close.addEventListener("click", () => {
            document.querySelector("main").removeChild(document.querySelector("modal-item"))
        })
    }
}
customElements.define("modal-item", Modal)