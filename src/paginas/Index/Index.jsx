import React from 'react'
import FilmesDestaques from '../../componentes/FilmesDestaques/FilmesDestaques'
import FilmesPopulares from '../../componentes/FilmesPopulares/FilmesPopulares'
import FilmesComedia from '../../componentes/FilmesComedia/FilmesDeComedia'
const Index = () => {
  return (
    <>
        <FilmesPopulares/>
        <FilmesDestaques/>
        <FilmesComedia/>
    </>
  )
}

export default Index