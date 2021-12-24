import "./makanan.js"
class listMakanan extends HTMLElement{
    set listMakanan(data){
        this._listMakanan = data;
        this.render();
    }
    render(){
        this._listMakanan.map(e => {
            const cardMakanan = document.createElement("card-makanan")
            cardMakanan.dataMakanan =  e;
            this.appendChild(cardMakanan)
        })   
    }
}
customElements.define("list-makanan", listMakanan)