import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './styles.js'
import PosterCard from '../../components/PosterCard/index.js'
import MovieDetails from '../../components/MovieDetails/index.js'
import TvShowDetails from '../../components/TvShowDetails/index.js'

const apiURL = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY
const imageURL = process.env.REACT_APP_BASE_URL_IMAGE

export default function Search() {
  const { search } = useParams()
  const [results, setResults] = useState([])
  const [modal, setModal] = useState(0)

  useEffect(() => {
    axios.get(`${apiURL}/search/multi`, {
      params: {
        api_key: apiKey,
        language: 'en-US',
        page: 1,
        query: search,
        include_adult: false
      }
    })
    .then(res => setResults(res.data.results.filter(item => item.poster_path)))
    .catch(err => console.log(err))

    const header = document.querySelector('#header')
    const footer = document.querySelector('#footer')
    header.style.background = '#0F2133'
    
    if (results.length < 5) {
      footer.style.position = 'absolute'
    } else {
      footer.style.position = 'initial'
    }
  })

  return (
    <S.ResultSection>
      <S.NotFound>{results.length < 1 && `Oops... '${search}' not found.`}</S.NotFound>
      <S.ResultsContainer>
        {results.map((item, index)=> (
          <div key={index}>
            <PosterCard
              title={item.title ? item.title : item.name}
              openDetails={() => {setModal(item.id)}}
              vote={item.vote_average}
              image={`${imageURL}/${item.poster_path}`}
            />

            {
              modal === item.id && 
              (
                item.title ? <MovieDetails Id={item.id} closeModal={() => {setModal(0)}} /> : 
                <TvShowDetails Id={item.id} closeModal={() => {setModal(0)}} />
              )
            }           
          </div>
        ))}
      </S.ResultsContainer>
    </S.ResultSection>
  )
}