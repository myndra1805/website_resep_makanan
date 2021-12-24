import "./component/navbar.js";
import "./component/footer.js";
import "./component/jumbotron.js";
import "./component/listMakanan.js";
import "./component/kategori.js";
import "regenerator-runtime";
import "./style/index.css";

function getData(url){
    return fetch(url)
        .then(res => res.json())
}
window.addEventListener("load", async() => {
    const main = document.querySelector("main")
    
    //List kategori
    const kategori = (await getData("https://www.themealdb.com/api/json/v1/1/list.php?c=list")).meals
    const listKategori = document.createElement("list-kategori")
    listKategori.listKategori = kategori
    main.appendChild(listKategori)

    //List makanan
    const data = (await getData("https://www.themealdb.com/api/json/v1/1/filter.php?c=beef")).meals
    const listMakanan = document.createElement("list-makanan")
    listMakanan.listMakanan =  data;
    main.appendChild(listMakanan)
})