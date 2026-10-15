import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import navegacao from './components/Navegacao';
import PaginaUm from './pages/PaginaUm';
import PaginaDois from './pages/PaginaDois';


export default function App(){
    return(
       <BrowserRouter>
            <div>
            <Routes>
                <Route path="/Pagina-um" element={<PaginaUm />} />
                <Route path="/Pagina-dois" element={<PaginaDois />} />
            </Routes>
            </div>
        </BrowserRouter>
    );
}