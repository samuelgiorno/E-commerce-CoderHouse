//import * as firebase from 'firebase/app'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { 
  collection,
  getDocs, 
  query, 
  where, 
  getDoc, 
  doc, 
  writeBatch,
  addDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDqeMmWuNgBtrfOgoBmAqpEKT5aLbR58mo",
  authDomain: "proyectocoder-333123.firebaseapp.com",
  projectId: "proyectocoder-333123",
  storageBucket: "proyectocoder-333123.appspot.com",
  messagingSenderId: "888647346486",
  appId: "1:888647346486:web:59e58f132a2209aaeeab97",
  measurementId: "G-QGL6W4VRG8"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export const getItems = (key, operator, value) =>{
  return new Promise((resolve, reject) =>{

        ( async () => {
          
            const collectionQuery = key && operator && value
                                  ? (query(collection(db, 'productos'), where(key, operator, value)))
                                  : (collection(db, 'productos'))

            try{
                const querySnapshot = await getDocs(collectionQuery)
                const listItems = querySnapshot.docs.map(doc =>{
                  return { id: doc.id, ...doc.data()}
                })
                resolve(listItems)
            }
            catch(error){
              reject(`Error en la consulta a la base de datos ${error}`);
            }
          })()
  })
}

export const getItemById = (value) =>{

  return new Promise((resolve, reject) =>{

    ( async () => {
  
      try{        
          const querySnapshot = await getDoc(doc(db, 'productos', value))
          const productById = { id: querySnapshot.id, ...querySnapshot.data()}                        
          resolve(productById)

      } catch{
          reject('Error en la consulta a la base de datos');
      }
      })()

  })
}


export const updateProduct = (getDataCart, addItem) =>{
  
  return new Promise ((resolve, reject)=>{

    const batch = writeBatch(db)
    const noStock = []

    getDataCart.items.forEach((item) => {
      (async()=>{
          try{
              const product = await getDoc(doc(db, 'productos', item.id))
              
              if (product.data().stock >= item.cant){
                  batch.update(doc(db, 'productos', item.id),{
                      stock: product.data().stock - item.cant
                  })
              }
              else{
                  noStock.push({id: item.id, ...item.data()})
              }
          }
          catch{
              reject('Error');
          }
      })()
  });

  if (noStock.length === 0 || addItem.length !== 0){
      (async ()=>{
          try{
             const added = await addDoc(collection(db, 'orders'), getDataCart)
             batch.commit().then(()=>{
                  resolve(added.id)
             })
          }
          catch{
              reject('Error en update');
          }
      })()
  }

  })
} 