import { useState } from 'react'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import PasswordResetRequest from './components/PasswordResetRequest'
import PasswordReset from './components/PasswordReset'
import ProtectedRoute from './components/ProtectedRoutes'

import Login from './pages/Login'
import About from './pages/About'
import BatmanHome from './pages/BatmanHome'
import Map from './pages/Map'
import FoxHome from './pages/FoxHome'
import AlfredHome from './pages/AlfredHome'
import LoginForm from './pages/LoginForm'
import Register from './pages/Register'
import Forca from './pages/forca_do_justiceiro/Forca'
import GordonFavor from './pages/GordonFavor'
import Convidados from './pages/Convidados'
import Relogio from './pages/Relogio'
import Projetos from './pages/Projetos'
import Veiculos from './pages/Veiculos'
import Patentes from './pages/Patentes'
import Tarefas from './pages/Tarefas'

function App() {
  const location = useLocation()

  return (
    <>
        
      
        <Routes>
          <Route path = '/' element={<LoginForm />}/>
          <Route path = '/register' element={<Register />}/>
          <Route path = '/request/password_reset' element={<PasswordResetRequest />}/>
          <Route path = '/password-reset/:token' element={<PasswordReset />}/>
          <Route path = '/about' element={<About />}/>
          


          <Route element={<ProtectedRoute />}>

            <Route path = '/identify' element={<Login />}/>
            
            <Route path = '/BatmanHome' element={<BatmanHome />}/>
            <Route path = '/forca' element={<Forca />}/>
            <Route path = '/gordon_favor' element={<GordonFavor />}/>
            <Route path = '/mapa' element={<Map />}/>

              <Route path = '/AlfredHome' element={<AlfredHome />}/>
              <Route path = '/convidados' element={<Convidados />}/>
              <Route path = '/relogio' element={<Relogio />}/>
              <Route path = '/tarefas' element={<Tarefas />}/>

            <Route path = '/FoxHome' element={<FoxHome />}/>
            <Route path = '/projetos' element={<Projetos />}/>
            <Route path = '/patentes' element={<Patentes />}/>
            <Route path = '/veiculos' element={<Veiculos />}/>

            </Route>
          </Routes>

    </>
  )
}

export default App
