import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../../services/api'
import _ from 'lodash'
import Carousel from 'react-bootstrap/Carousel';

const FilmesPopulares = () => {

    const [carouselItems, setCarouselItems] = useState([]);
    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/detalhe/${id}`)
    }

    useEffect(() => {
        api.get('/movie/popular?sort_by=popularity.desc') .then((response1)=> {
            api.get('/movie/popular?sort_by=popularity.desc&page=2').then((response2) => {
                let filmesRetornados = response1.data.results.concat(response2.data.results);
                setCarouselItems(_.chunk(filmesRetornados, 4))
          })      
        })
    }, [])
  return (
   <div className='container'>
    <h3 className='text-white mt-5 mb-2'>Filmes Populares</h3>
    <Carousel fade indicators={false}>
        {
          carouselItems.length > 0 && carouselItems.map((carouselItem, index) => (
            <Carousel.Item key={index}>
              <div className="row">
                {
                  carouselItem.map((filme) => (
                    <div className="col-md-3" key={filme.id} onClick={() => handleClick(filme.id)}>
                      <img className="d-block w-100" src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt=""/>
                    </div>
                  ))
                }
              </div>
            </Carousel.Item>
          ))
        }
      </Carousel>
   </div>



  )
}

export default FilmesPopulares