import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";

export default function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((resp) => {
                setProduct(resp.data);
            }).catch((err) => {
                console.log(err);
                alert("Il prodotto non esiste");
                navigate("/prodotti");
            }).finally(() => {
                setLoading(false);

            })
    }, [id]);
    return (
        <section>
            <h1>{product.title}</h1>
        </section>
    )

}