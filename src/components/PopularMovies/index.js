import React, { Component } from 'react'
import axios from 'axios'
import * as S from './styles.js'
import PosterCard from '../PosterCard'
import MovieDetails from '../MovieDetails'
import { GlobalStyle } from '../../styles/GlobalStyles/styles.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const apiURL = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY
const imageURL = process.env.REACT_APP_BASE_URL_IMAGE

export default class PopularMovies extends Component {
  state = {
    movies: [],
    modal: 0
  }

  componentDidMount() {
    this.getMovies()
  }

  componentDidUpdate(_, prevState) {
    const { currentPage, modal } = this.state

    if (prevState.currentPage !== currentPage) {
      this.getMovies()
    } else if (modal !== 0) {
      window.scrollTo(0, 0)
    }
  }

  getMovies = async () => {
    const {data: { results }} = await axios.get(`${apiURL}/movie/popular`, {
      params: {
        api_key: apiKey,
        language: 'en-US',
        page: 7
      }
    })

    const allMovies = results.map(movie => {
      return {
        ...movie,
        image: `${imageURL}${movie.poster_path}`
      }
    }).slice(0, 12)

    this.setState({
      movies: allMovies
    })
  }

  render() {
    const { movies, modal } = this.state

    return (
      <div>
        <GlobalStyle overflow={modal !== 0 ? 'hidden' : 'auto'} scroll='auto' />
        <S.Header>
          <S.Title>Tv Shows</S.Title>
          <S.SeeAll to='/movies'>
            See All
            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
          </S.SeeAll>
        </S.Header>
        <S.MoviesContainer>
          {movies.map((movie, index) => (
            <div key={index}>
              <PosterCard
                    height='22vw'
                    title={movie.title}
                    openDetails={() => {this.setState({modal: movie.id})}}
                    vote={movie.vote_average}
                    image={movie.image}
                />
                {
                  modal === movie.id && 
                  <MovieDetails Id={movie.id} closeModal={() => {this.setState({modal: 0})}} />
                }
            </div>
          ))}
        </S.MoviesContainer>
      </div>
    )
  }
}