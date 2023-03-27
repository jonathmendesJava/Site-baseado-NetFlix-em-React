import React, { useEffect } from 'react'
import MeuNavbar from './componentes/MeuNavBar/MeuNavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
    useEffect(() =>{
        document.title = 'FlexFlix'
    }, [])
  return (
    <MeuNavbar></MeuNavbar>
  )
}

export default App