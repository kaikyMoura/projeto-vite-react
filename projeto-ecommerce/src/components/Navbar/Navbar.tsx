import { Link } from "react-router-dom"
import './navbar.css'

interface NavBarProps {
    //link: string
    navegacao: { nome: string, link: string }[]
    //nome: string
    titulo: string
    logo?: string
}

const NavBar = ({ titulo, navegacao }: NavBarProps) => {

    return (<>
        <div className="navbar">
            <div>
                <h2>{titulo}</h2>
                <ul>
                    {navegacao?.map((item) => (
                        <>
                            <li>
                                <Link to={item.link}>
                                    {item.nome}
                                </Link>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </div >
    </>)
}

export default NavBar