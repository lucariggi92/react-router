import { NavLink } from "react-router-dom"

export default function Header() {



    const navLinks = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "ChiSiamo",
            path: "/chi-siamo"
        },
        {
            title: "Prodotti",
            path: "/prodotti"
        }
    ]



    return (
        <header>
            <ul>
                {navLinks.map((link, index) => (
                    <li key ={index}>
                        <NavLink to={link.path}>{link.title}</NavLink>
                    </li>

                ))}



            </ul>
        </header>


    )
}