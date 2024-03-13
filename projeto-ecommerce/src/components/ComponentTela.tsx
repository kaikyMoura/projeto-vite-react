import { Navigate } from "react-router-dom";
import DashBoard from "./Dashboard/Dashboard";

interface ComponenteTelaProps {
    children: React.ReactNode;
}

const ComponenteTela: React.FC<ComponenteTelaProps> = ({ children }) => {
    const token = sessionStorage.getItem('Token');

    if (token != null) {
        // Se houver um token, renderize os filhos (componentes aninhados) dentro de uma rota
        return (
            <DashBoard children={children} itemsSideBar={[
                { nome: "Home", link: "/home" }, { nome: "Conteudo", link: "/conteudo" }
            ]} />
        )
    }
    else {
        // Se não houver um token, redirecione para a página inicial
        return <Navigate to={"/"} />;
    }
};

export default ComponenteTela;