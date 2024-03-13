import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ComponenteTela from './components/ComponentTela';
import Conteudo from './pages/conteudo';
import CreateUserPage from './pages/createUser/createUserPage';
import Home from './pages/home';
import LoginPage from './pages/login/loginPage';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <body>
      <BrowserRouter>
        <Routes>
          <Route path='/createUser' element={
            <CreateUserPage />
          } />
          <Route path="/" element={
            <LoginPage />
          } />
          <Route path='/home' element={
            <ComponenteTela >
              <Home />
            </ComponenteTela>} />
          <Route path="/conteudo" element={
            <ComponenteTela>
              <Conteudo />
            </ComponenteTela>} />
        </Routes>
      </BrowserRouter >
    </body>
  )
}

export default App;