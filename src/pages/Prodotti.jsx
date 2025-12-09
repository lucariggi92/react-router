import axios from "axios"
import { useEffect, useState } from "react"


export default function Prodotti() {
    const [products, setProducts] = useState([]);

    useEffect(() =>
        axios.get("https://fakestoreapi.com/products").then(resp=> { console.log(resp.data);setProducts(resp.data);
        }).catch(err => console.error(err)), []);


    return (

        <section>
            <h2>Lista Prodotti</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}

            </ul>

        </section>
    )
}