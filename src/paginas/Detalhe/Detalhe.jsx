import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../services/api'
import styles from '../Detalhe/Detalhe.module.css'

const Detalhe = () => {
  const [filme, setFilme] = useState()
  const {id} = useParams()
  const navigate = useNavigate

  const handleClick = (id) => {
    navigate (`/detalhe/${id}`)
  }

  useEffect(()=>{
   api.get(`/movie/${id}?append_to_response=videos,casts,images,recommendations`) .then(({data}) =>{
      console.log(data)
      setFilme(data)
    })
  }, [id])

  return (
      <>
      {
        filme && (
          <div className="container">
            <div className={styles.cabecalho}>
              <div className={styles.info}>
                <h1>{filme.title}</h1>
                <h2>{filme.tagline}</h2>
                <h5><FontAwesomeIcon icon={faStar} className='text-warning' /> {filme.vote_average} </h5>
                <h6>
                  {filme.release_date.split('-')[0]} - {filme.runtime} min - {filme.genres.map((genero) => genero.name).join(', ')}
                </h6>
              </div>
              <img src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt="" className="w-100" />
            </div>

            <div className="row mt-5">
              <div className="col-md-12">
                <h2 className="text-white">Sinopse</h2>
              </div>

              <div className="col-md-12">
                <p className="text-white">{filme.overview}</p>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-12">
                <h2 className="text-white">Vídeos</h2>
              </div>

              {
                filme.videos.results.length > 0 && filme.videos.results.slice(0, 3).map((video) => (
                  <div className="col-md-4" key={video.id}>
                    <div className={styles.video}>
                      <iframe width="100%" height="400px" src={`https://www.youtube.com/embed/${video.key}`} title={video.name}>

                      </iframe>
                    </div>
                  </div>
                ))
              }
            </div>

            <div className="row mt-5">
              <div className="col-md-12">
                <h2 className="text-white">Elenco</h2>
              </div>
              {
                filme.casts.cast.slice(0, 6).map((elenco) => (
                  <div className="col-md-2 position-relative" key={elenco.id}>
                    <div className={styles.elenco}>
                      <img src={`https://image.tmdb.org/t/p/original${elenco.profile_path}`} alt="" className="w-100" />
                      <div className={styles.elenco_info}>
                        <h5>{elenco.name}</h5>
                        <h6>{elenco.character}</h6>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

            <div className="row mt-5 mb-5">
              <div className="col-md-12">
                <h2 className="text-white">Filmes Semelhantes</h2>
              </div>
              {
                filme.recommendations.results.slice(0, 6).map((filme) => (
                  <div className="col-md-2 position-relative" key={filme.id} onClick={() => handleClick(filme.id)}>
                    <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt="" className="w-100" />
                  </div>
                ))
              }
            </div>
          </div>

        )
      }
      </>
  )
}

export default Detalhe