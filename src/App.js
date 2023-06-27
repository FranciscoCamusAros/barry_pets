import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbars from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import PreguntasFrecuentes from './views/PreguntasFrecuentes';
import Carro from './views/Carro';
import SignUp from './views/SignUp';
import Login from './views/LogIn';
import Correas from './views/Correas';
import Accesorios from './views/Accesorios';
import Etologia from './views/Etologia';
import './index.css';
import MyContext from './context/my_context';
import { useState } from 'react';


function App() {
  const [correaUno, setCorreaUno] = useState(0);
  const [correaDos, setCorreaDos] = useState(0);
  const [correaTres, setCorreaTres] = useState(0);
  const [unidadKong, setKong] = useState(0);
  const [unidadPlato, setPlato] = useState(0);
  const [unidadDispensador, setDispensador] = useState(0);

  const sharedState = {correaUno, setCorreaUno, correaDos, setCorreaDos, correaTres, setCorreaTres, unidadKong, setKong, unidadPlato, setPlato, unidadDispensador, setDispensador};

  return (
    <div className="App">
      <MyContext.Provider value={ sharedState }>
        <BrowserRouter>
          <Navbars />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/correas" element={<Correas />} />
            <Route path="/accesorios" element={<Accesorios />} />
            <Route path="/preguntas_frecuentes" element={<PreguntasFrecuentes />} />
            <Route path="/carrito" element={<Carro />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/etologia" element={<Etologia />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </MyContext.Provider>
    </div>
  );
}

export default App;
