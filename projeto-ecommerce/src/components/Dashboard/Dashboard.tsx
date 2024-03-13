import SideMenu from "../Menu/SideMenu"
import NavBar from "../Navbar/Navbar"
import './dashboard.css'

interface DashBoardProps {
    children: any
    itemsSideBar: any[] | any
}

const DashBoard = ({ children, itemsSideBar }: DashBoardProps) => {

    return (
        <>
            <div className="dashboard">
                <NavBar navegacao={[
                    { nome: "Home", link: "/" }, { nome: "Conteudo", link: "/conteudo" }
                ]} titulo={"Dashboard"} />

                <SideMenu items={itemsSideBar} logo={"Menu"} />
            </div>
            {children}
        </>
    )
}

export default DashBoard