import { Link } from "react-router-dom";
import './sidemenu.css'

interface SideMenuProps {
    //link: string
    items: { nome: string, link: string }[]
    //nome: string
    logo: string
}

const SideMenu = ({ logo, items }: SideMenuProps) => {
    return (
        <>
            <div className="sidemenu">
                <h3>{logo}</h3>
                <ul>
                    {items?.map((item) => (
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
        </>
    )
}

export default SideMenu;
