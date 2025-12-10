import { useParams } from "react-router-dom"

export default function SingleProduct(){
    const {id} =useParams();
    return(
        <section>
           <h1>pagina singolo prodotto {id}</h1> 
        </section>
    )

}