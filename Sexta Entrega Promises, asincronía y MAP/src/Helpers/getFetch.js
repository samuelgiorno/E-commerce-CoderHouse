const productos = [
    {id: 1, img: 'http://imgfz.com/i/DreEmIp.png', name: 'Item 1', description: 'Descripción del item 1', price: '10'},
    {id: 2, img: 'http://imgfz.com/i/DreEmIp.png', name: 'Item 2', description: 'Descripción del item 2', price: '10'},
    {id: 3, img: 'http://imgfz.com/i/DreEmIp.png', name: 'Item 3', description: 'Descripción del item 3', price: '10'},
    {id: 4, img: 'http://imgfz.com/i/DreEmIp.png', name: 'Item 4', description: 'Descripción del item 4', price: '10'},
    {id: 5, img: 'http://imgfz.com/i/DreEmIp.png', name: 'Item 5', description: 'Descripción del item 5', price: '10'},
];

export const getFetch = new Promise ((resolve) => {
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
})