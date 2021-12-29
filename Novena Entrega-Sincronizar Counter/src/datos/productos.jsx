const productos = [
    {
        id: 1, 
        nombre: 'Zapatillas Nano BEYOND THE BOX', 
        descrip: 'Nano X1 Grit es un nuevo producto para Mujer. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conoces Nano X1 Grit puedes dejar una reseña abajo; siempre nos encanta conocer tu opinión.',
        precio: '$379,00', 
        img:'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/045fe96fdd33439caa43ad1f014d441c_9366/Zapatillas_Reebok_Nano_BEYOND_THE_BOX_Blanco_H02865_01_standard.jpg', 
        stock:10,
        categoria: 'mujer'
    },
    {
        id: 2, 
        nombre: 'Zapatillas Royal Techque', 
        descrip: 'Algunos modelos no necesitan presentación. El Royal Techque es un modelo clásico por su confección en cuero y su look deportivo que combina tanto con shorts como con pantalones caquis y una casaca. La suela envolvente de caucho le aporta tracción a la vibra auténtica y retro que transmite este modelo.',
        precio: '$219,00', 
        img:'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f9328fd004644c00aebeab2100b87be2_9366/Zapatillas_Reebok_Royal_Techque_Negro_CN3195_01_standard.jpg', 
        stock:14,
        categoria: 'hombre'
    },
    {
        id: 3, 
        nombre: 'ZAPATIL RUNNER 5', 
        descrip: 'Zapatilla Runner 5.0 es un nuevo producto para Mujer. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conoces Runner 5.0 puedes dejar una reseña abajo; siempre nos encanta conocer tu opinión.',
        precio: '$219,00', 
        img:'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a0cfd998c506479db310ac620134ef2f_9366/Zapatillas_Reebok_Runner_5_Azul_FX1815_01_standard.jpg', 
        stock:6,
        categoria: 'mujer'
    },
    {
        id: 4, 
        nombre: 'Zapatillas Flexagon Force 3', 
        descrip: 'Revoluciona tu rutina con estas zapatillas para entrenar Reebok. El exterior de malla es ligero y transpirable. Las ranuras flexibles en la zona delantera te permiten un rango de movimiento completo para que lo des todo en tus squats y lunges. La espuma FuelFoam te brinda amortiguación acolchada para darte comodidad de principio a fin.',
        precio: '$.175,20', 
        img:'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8baba928ff9d48d58585ad2f00b8f0d1_9366/Zapatillas_Flexagon_Force_3_Plomo_H67687_01_standard.jpg', 
        stock:16,
        categoria: 'hombre'
    },
    {
        id: 5, 
        nombre: 'Zapatillas Club C Coast', 
        descrip: 'Un modelo con estilo impecable y fresco inspirado en el tenis. Las zapatillas Club C Coast para mujer vienen más frescas que nunca. Obtén un estilo minimalista y chic gracias a su diseño estilizado. Los colores saturados le dan al exterior de tela suave un look elegante. La suela blanca vulcanizada sobresale del exterior para darles un toque sofisticado.',
        precio: '$199,00', 
        img:'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6fc66164b0084b96b204ad170140124f_9366/Zapatillas_Club_C_Coast_Verde_GW0258_01_standard.jpg', 
        stock:4,
        categoria: 'mujer'
    },
    {
        id: 6, 
        nombre: 'Zapatillas CLUB C Revenge', 
        descrip: 'Club C Revenge es un nuevo producto para Unisex de Reebok. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conoces Club C Revenge puedes dejar una reseña abajo; siempre nos encanta conocer tu opinión.', 
        precio: '$259,00', 
        img:'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2c37fc9879c44afc819bacb7014eae22_9366/Zapatillas_CLUB_C_Revenge_Blanco_FY7514_01_standard.jpg', 
        stock:16,
        categoria: 'mujer'
    },
    {
        id: 7, 
        nombre: 'RBK ROYAL COMPLETE CLN ALT 2.0', 
        descrip: 'Royal Complete Cln Alt 2.0 es un nuevo producto para Niños de Reebok. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conoces Rbk Royal Complete Cln Alt 2.0 puedes dejar una reseña abajo; siempre nos encanta conocer tu opinión.',
        precio: '$139,00', 
        img:'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/26e9048b14de4e95b082ac9f009eeab7_9366/RBK_ROYAL_COMPLETE_CLN_ALT_2.0_Blanco_FZ2770_01_standard.jpg', 
        stock:3,
        categoria: 'nino'
    },
    {
        id: 8, 
        nombre: 'Zapatillas Nanoflex TR', 
        descrip: 'De double-unders a sprints, te sentirás más rápido y ligero con estas zapatillas Reebok para hombre. Su exterior de malla ligera está diseñado para ofrecerte una sensación casi imperceptible a altas velocidades. Las ranuras flexibles en la suela favorecen un rango completo de movimiento. El gráfico en la lengüeta te motiva a salir a explorar.',
        precio: '$199,00', 
        img:'https://assets.reebok.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/02fa7cab8fe9469b8789acc400877f4f_9366/Zapatillas_Nanoflex_TR_Azul_GZ6973_01_standard.jpg', 
        stock:20,
        categoria: 'hombre'
    },
    {
        id: 9, 
        nombre: 'EX-O-FIT HI', 
        descrip: 'Actualiza tu estilo con este modelo que se convertirá en tu favorito. Nuestras Freestyle Hi para niñas son el balance perfecto entre un estilo divertido y características funcionales.',
        precio: '$219,00', 
        img:'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/346cf027feaa46c793b3abc101842ce4_9366/EX-O-FIT_HI_Multi_CN5750_01_standard.jpg',
        stock:6,
        categoria: 'nino'
    },
    {
        id: 10, 
        nombre: 'Zapatillas Reebok Flexagon Energy', 
        descrip: 'Hay mucho por jugar y tu pequeñín lo sabe. Estas zapatillas Reebok para niños vienen con una correa de cierre por contacto sobre los pasadores para asegurar un ajuste firme sin importar cuánto corra tu campeón.',
        precio: '$149,00', 
        img:'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/21ebdee9d0f04083ba92accc00a77487_9366/Zapatillas_Reebok_Flexagon_Energy_Azul_G57460_01_standard.jpg', 
        stock:8,
        categoria: 'nino'
    },
    {
        id: 11, 
        nombre: 'Zapatillas Nanoflex TR', 
        descrip: 'De double-unders a sprints, te sentirás más rápido y ligero con estas zapatillas Reebok para hombre. Su exterior de malla ligera está diseñado para ofrecerte una sensación casi imperceptible a altas velocidades. Las ranuras flexibles en la suela favorecen un rango completo de movimiento. El gráfico en la lengüeta te motiva a salir a explorar.',
        precio: '$199,00', 
        img:'https://assets.reebok.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/02fa7cab8fe9469b8789acc400877f4f_9366/Zapatillas_Nanoflex_TR_Azul_GZ6973_01_standard.jpg', 
        stock:20,
        categoria: 'hombre'
    },
    {
        id: 12, 
        nombre: 'Zapatillas Nanoflex TR', 
        descrip: 'De double-unders a sprints, te sentirás más rápido y ligero con estas zapatillas Reebok para hombre. Su exterior de malla ligera está diseñado para ofrecerte una sensación casi imperceptible a altas velocidades. Las ranuras flexibles en la suela favorecen un rango completo de movimiento. El gráfico en la lengüeta te motiva a salir a explorar.',
        precio: '$199,00', 
        img:'https://assets.reebok.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/02fa7cab8fe9469b8789acc400877f4f_9366/Zapatillas_Nanoflex_TR_Azul_GZ6973_01_standard.jpg', 
        stock:20,
        categoria: 'hombre'
    },
]

/* const producto = {
    id: 1, 
    nombre: "Plato", 
    descrip: 'Perteneciente a la colección Yuri-Kasaf presentada en Enero de 2021 en la ciudad de Amsterdam, Holanda. Díametro: 30cm. Alto: 2cm',
    precio: "$789,00", 
    img:"../media/plato.jpg", 
    stock: 10,
    rel:  [ {id:'1', img:"../media/relBandejas.jpg"},
            {id:'2', img:"../media/relCompoteros.jpg"},
            {id:'3', img:"../media/relJuego.jpg"},
            {id:'4', img:"../media/relVasos.jpg"}, 
    ] 
} */


export const getProductos = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(productos)
        },2000)
    }
    )
}

export const getProductoById = (id) =>{
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        const producto = productos.find(prod => parseInt(prod.id) === parseInt(id))
            resolve(producto)
        }, 2000)
    }
    )
}

export const getProductosByCategory = (category) => {

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const listProductos = productos.filter(prod => prod.categoria === category)
            console.log(listProductos);
            resolve(listProductos)
            
        }, 2000)
    })
}