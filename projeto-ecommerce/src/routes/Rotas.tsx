//interface RotasProps{}

import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Conteudo from '../pages/conteudo'

const Rotas = () => {
    return (
        <Routes>
            <Route path='/'>
                <App />
            </Route>
            <Route path='/conteudo'>
                <Conteudo />
            </Route>
        </Routes>
    )
}

export default Rotas