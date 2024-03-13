import { useState } from "react";
import { userLogin } from "../../api/services/serviceUser";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import UserLoginProps from "../../model/UserLogin";
import "./loginpage.css"
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = async () => {
        const usuario: UserLoginProps = {
            email: email,
            password: password
        }
        await userLogin(usuario).then(()=>{
            navigate("/home")
        })
    }

    return (
        <>
            <div className="container">
                <form className="form-container">
                    <h2>Login</h2>
                    <Input label={"Email"} placeholder={"email"} onChange={(e: { target: { value: SetStateAction<string> } }) =>
                        setEmail(e.target.value)} type={"email"} />
                    <Input label={"Senha"} placeholder={"senha"} onChange={(e: { target: { value: SetStateAction<string> } }) =>
                        setPassword(e.target.value)
                    } type={"password"} />
                    <br />
                    <div className="buton">
                        <Button text={"salvar"} action={login}/>
                    </div>
                    <br />
                    <div>
                        Não tem uma conta ? <a href="/createUser">clique aqui</a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginPage;