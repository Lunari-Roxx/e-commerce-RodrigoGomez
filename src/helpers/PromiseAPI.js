import { product } from "../data/product";



export const productsAPI = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve([
            {id:1 , title : "Monster energy", category:"energy-drink", price: 90 , pictureURL:"https://f.fenicio.app/imgs/5ef58d/www.distribuidoradelacosta.com.uy/dicouy/cf8c/original/catalogo/2-1782-1781/600x780/monster-energy-monster-energy.jpg" , stock:10 , description : "Lata de bebida energizante sabor guarana"},
            {id:2 , title : "RedBull", category:"energy-drink",  price: 120 , pictureURL:"https://f.fenicio.app/imgs/87e24d/lavigne.com.uy/laviuy/4a59/original/catalogo/90424052904240521/800x1200/energizante-red-bull-energy-drink-250ml-energizante-red-bull-energy-drink-250ml.jpg" , stock:12},
            {id:3 , title : "Rockstar", category:"energy-drink", price: 100 , pictureURL:"data:image/jpeg;base64,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", stock :9},
            {id:4 , title : "Zevia", category:"energy-drink", price: 150 , pictureURL:"https://cdn.shoplightspeed.com/shops/636507/files/35390842/1652x2313x2/zevia-zevia-raspberry-lime-energy-drink-in-cans.jpg" , stock:20},
            {id: 5 , title : "Patricia", category : "alcohol" , price: 160, pictureURL: "https://www.distribuidorabebidas.com.uy/wp-content/uploads/sites/31/2018/01/cerveza_patricia_botella_litro.jpg", stock : 100},
            {id:6 , title : "Pilsen", category :"alcohol" , price : 135 , pictureURL:"https://images-ti-vm1.tiendainglesa.com.uy/medium/P408510-1.jpg?20210125141940,Cerveza-PILSEN-Botella-Retornable-340-cc-en-Tienda-Inglesa" , stock:100},
            {id:7 , title : "Corona" , category:"alcohol" , price:120, pictureURL:"https://elbodegon.com.uy/wp-content/uploads/2018/11/11432-B.jpg", stock:300},
            {id:8 , title :"Pepsi", category:"soft-drink" , price:60, pictureURL:"https://images-ti-vm1.tiendainglesa.com.uy/medium/P065576-1.jpg?20211127110024,Refresco-PEPSI-Cola-Descartable-1.5-L-en-Tienda-Inglesa" , stock:85},
            {id:9 , title:"Coca-Cola" , price:60 , category:"soft-drink", pictureURL:"https://www.distribuidorabebidas.com.uy/wp-content/uploads/sites/31/2018/01/funda_coca_cola_225_litros.jpg", stock:23}
        ])
    }, 2000);
})


export const item = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(product);
    }, 2000);
})

