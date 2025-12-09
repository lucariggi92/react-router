import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Prodotti() {
const [products, setProducts] =useState([]);
  


    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((resp)=>{
          setProducts(resp.data)
        })
    })

    return (

        <section>
            <h2>lista</h2>
            <ul>
                {products.map((cuProduct)=>
                <li key ={cuProduct.id}>{cuProduct.title}</li>
                )}
            </ul>
            
          
        </section>
    )
}