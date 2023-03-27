import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Bombando from './paginas/Bombando/Bombando'
import Series from './paginas/Series/Series'
import Filmes from './paginas/Filmes/Filmes'
import Detalhe from './paginas/Detalhe/Detalhe'
import Index from './paginas/Index/Index'
import Error404 from './paginas/Error404/Error404'

const MinhasRotas = () => {
  return (
    <Routes>
        <Route path= '/' element={ <Index/> }/> {/*index*/}
        <Route path= '/series' element={<Series/>}/>
        <Route path= '/filmes' element={ <Filmes/> }/>
        <Route path= '/bombando' element={ <Bombando/> }/>
        <Route path= '/detalhe/:id' element={ <Detalhe/> }/>
        <Route path= '*' element={ <Error404/> }/>       
    </Routes>
  )
}

export default MinhasRotas