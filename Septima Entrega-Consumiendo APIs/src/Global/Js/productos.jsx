const productos = [
    {id: 1, nombre: "Zapatilla 1", descrip: "Diámetro: 30cm",precio: "$300,00", img:"https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/678f99c984894bd89135ac610005fb2a_9366/Zapatillas_Reebok_Vector_Smash_Blanco_FZ0288_01_standard.jpg", stock:10},
    {id: 2, nombre: "Zapatilla 2", descrip: "Zapatillas Reebok Flexagon Energy", precio: "$149,00", img:"https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/21ebdee9d0f04083ba92accc00a77487_9366/Zapatillas_Reebok_Flexagon_Energy_Azul_G57460_01_standard.jpg", stock:14},
    {id: 3, nombre: "Zapatilla 3", descrip: "Largo: 25cm | Ancho: 15cm",precio: "$420,00", img:"https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9f5daeea266f4783998faaaa00a99a92_9366/Zapatillas_Classic_Leather_Blanco_2214_01_standard.jpg", stock:6},
    {id: 4, nombre: "Zapatilla 4", descrip: "Alto: 13cm | Diámetro: 7cm",precio: "$229,00", img:"https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/648090469c4b458a8b73ad2f0043d6d7_9366/Zapatillas_Classic_Leather_Legacy_AZ_Blanco_GZ7344_01_standard.jpg", stock:16}

]


const producto = {
    id: 1, 
    nombre: "Zapatilla 1", 
    descrip: 'Para pies delgados recomendamos comprar la talla inferior. Revisa la equivalencia, H: Hombre | M: Mujer. No aplica ningún tipo de descuento.',
    precio: "$229,00", 
    img:"https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/648090469c4b458a8b73ad2f0043d6d7_9366/Zapatillas_Classic_Leather_Legacy_AZ_Blanco_GZ7344_01_standard.jpg", 
    stock: 10,
    rel:  [ {id:'1', img:"https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9f5daeea266f4783998faaaa00a99a92_9366/Zapatillas_Classic_Leather_Blanco_2214_01_standard.jpg"},
            {id:'2', img:"https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/21ebdee9d0f04083ba92accc00a77487_9366/Zapatillas_Reebok_Flexagon_Energy_Azul_G57460_01_standard.jpg"},
            {id:'3', img:"https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/678f99c984894bd89135ac610005fb2a_9366/Zapatillas_Reebok_Vector_Smash_Blanco_FZ0288_01_standard.jpg"},
            {id:'4', img:"https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/678f99c984894bd89135ac610005fb2a_9366/Zapatillas_Reebok_Vector_Smash_Blanco_FZ0288_01_standard.jpg"}, 
    ] 
}


export const getProductos = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(productos)
        },2000)
    }
    )
}

export const getProductoDetail = () =>{
    
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(producto)
        }, 2000)
    }
    )
}

