const productos = [
    {id: 1, img: 'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/678f99c984894bd89135ac610005fb2a_9366/Zapatillas_Reebok_Vector_Smash_Blanco_FZ0288_01_standard.jpg', name: 'Item 1', description: 'Descripción del item 1', price: '10'},
    {id: 2, img: 'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/678f99c984894bd89135ac610005fb2a_9366/Zapatillas_Reebok_Vector_Smash_Blanco_FZ0288_01_standard.jpg', name: 'Item 2', description: 'Descripción del item 2', price: '10'},
    {id: 3, img: 'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/678f99c984894bd89135ac610005fb2a_9366/Zapatillas_Reebok_Vector_Smash_Blanco_FZ0288_01_standard.jpg', name: 'Item 3', description: 'Descripción del item 3', price: '10'},
    {id: 4, img: 'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/678f99c984894bd89135ac610005fb2a_9366/Zapatillas_Reebok_Vector_Smash_Blanco_FZ0288_01_standard.jpg', name: 'Item 4', description: 'Descripción del item 4', price: '10'},
    {id: 5, img: 'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/678f99c984894bd89135ac610005fb2a_9366/Zapatillas_Reebok_Vector_Smash_Blanco_FZ0288_01_standard.jpg', name: 'Item 5', description: 'Descripción del item 5', price: '10'},
];

export const getFetch = new Promise ((resolve) => {
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
})
