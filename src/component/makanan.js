import "./modal.js";
class cardMakanan extends HTMLElement{
    set dataMakanan(data){
        this._makanan = data;
        this.render();
    }
    render(){
        this.innerHTML = /*html*/`
            <style>
                .card{
                    box-shadow: 0px 0px 5px black;
                    text-align: center;
                    margin: auto;
                    min-height: 300px;
                    position: relative;
                }
                .btn-show{
                    position: absolute;
                    left: 10px;
                    bottom: 10px;
                    border-radius: 10px;
                    background: linear-gradient(to right top, rgb(129, 8, 209), rgb(96, 9, 107));
                    height: 30px;
                    border: none;
                    color: white;
                }
                .btn-show:focus{
                    outline: none;
                }
                .btn-show:hover{
                    cursor: pointer;
                }
                .judul-makanan{
                    margin-top: 10px;
                    font-size: 16px;
                }
                @media screen and (max-width: 650px){
                    .judul-makanan{
                        font-size: 12px;
                    }
                }
            </style>
            <div class="card">
                <img src="${this._makanan.strMealThumb}" alt="" width="100%" height="200px">
                <p class="judul-makanan">${this._makanan.strMeal}</p>
                <button class="btn-show">Show More</button>
            </div>
        `
        const btnShow = [...this.querySelectorAll(".btn-show")]
        const main = document.querySelector("main")
        btnShow.map(e => {
            e.addEventListener("click", async() => {
                const modal = document.createElement("modal-item");
                const detailMasakan = (await this.getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this._makanan.strMeal}`)).meals[0]
                modal.detailMakanan = detailMasakan
                main.appendChild(modal)
            })
        })
    }
    getData(url){
        return fetch(url)
            .then(res => res.json())
    }
}
customElements.define("card-makanan", cardMakanan)