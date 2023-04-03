import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAxULCQ_TYrJiZXcYmB-hXgWDcUBadEmRU",
  authDomain: "el-templo-gamer.firebaseapp.com",
  projectId: "el-templo-gamer",
  storageBucket: "el-templo-gamer.appspot.com",
  messagingSenderId: "591056503591",
  appId: "1:591056503591:web:2171326340071176f59f02",
  measurementId: "G-2VQLDE47VG"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const cargarBDD = async () => {
  const promise = await fetch('./json/products.json')
  const products = await promise.json()
  products.forEach(async (prod) => {
    await addDoc(collection(db, "productos"), {
      id: prod.id,
      idCategoria: prod.idCategoria,
      nombre: prod.nombre,
      marca: prod.marca,
      modelo: prod.modelo,
      precio: prod.precio,
      stock: prod.stock,
      img: prod.img
    })
  });
}

export const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(prod =>{
    return {...prod.data(), id:prod.id}
  })
  return items
}

export const getProducto = async (id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const item = {...producto.data(), id:producto.id}
  return item
}

export const  updateProducto = async(id, info) => {
  await updateDoc(doc(db, "productos", id), info)
}

export const  deleteProducto = async(id) => {
  await deleteDoc(doc(db, "productos", id))
}

export const createOrdenCompra = async (cliente, productos, precioTotal, fecha) =>{
  const ordenCompra = await addDoc(collection(db, "ordenesCompra"), {
    datosCliente: cliente,
    productos: productos,
    precioTotal: precioTotal,
    fecha: fecha
  })
  return ordenCompra
}

export const getOrdenCompra = async (id) => {
  const obtenerOC = await getDoc(doc(db, "ordenesCompra", id))
  const OrdenCompraObtenida = {...obtenerOC.data(), id: obtenerOC.id}
  return OrdenCompraObtenida
}