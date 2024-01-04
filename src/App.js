import React  from 'react';
import './App.css';
import Home from './pages/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tecnologias from './pages/tecnologias/tecnologias';
import Projetos from './pages/projetos/projetos';
import Contato from './pages/contato/contato';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tecnologias' element={<Tecnologias />} />
          <Route path='/projetos' element={<Projetos />} />
          <Route path='/contato' element={<Contato />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
