import React, { Component } from 'react'
import axios from 'axios'
import * as S from './styles.js'
import PosterCard from '../../components/PosterCard/index.js'
import MovieDetails from '../../components/MovieDetails/index.js'

const apiURL = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY
const imageURL = process.env.REACT_APP_BASE_URL_IMAGE

export default class PopularMovies extends Component {
  state = {
    movies: [],
    currentPage: 1,
    modal: 0,
    maxPages: 500
  }

  componentDidMount() {
    this.getMovies()
  }

  componentDidUpdate(_, prevState) {
    const { currentPage } = this.state
    if (prevState.currentPage !== currentPage) {
      this.getMovies()
    }
  }

  getMovies = async () => {
    const { currentPage } = this.state
    const {data: { results }} = await axios.get(`${apiURL}/movie/popular`, {
      params: {
        api_key: apiKey,
        language: 'en-US',
        page: currentPage
      }
    })

    const allMovies = results.map(movie => {
      return {
        ...movie,
        image: `${imageURL}${movie.poster_path}`
      }
    })

    this.setState({
      movies: allMovies
    })
  }

  handleClickPrevPage = () => {
    const { currentPage } = this.state
    if(currentPage > 1) {
      this.setState(prevState => ({
        currentPage: prevState.currentPage - 1
      }))
      window.scrollTo(0, 0)
    }
  }

  handleClickNextPage = () => {
    const { currentPage, maxPages } = this.state
    if(currentPage < maxPages) {
      this.setState(prevState => ({
        currentPage: prevState.currentPage + 1
      }))
      window.scrollTo(0, 0)
    }
  }

  render() {
    const { currentPage, movies, modal } = this.state

    return (
      <S.MovieSection>
        <S.MoviesContainer>
          {movies.map((movie, index) => (
            <div key={index}>
              <PosterCard
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
        <S.BtnContainer>
          <S.PageControlBtn
            onClick={() => {this.handleClickPrevPage()}}
            brightness={currentPage === 1 && 'brightness(0.6)'}
            cursorStyle={currentPage === 1 && 'default'}
          >
            Prev
          </S.PageControlBtn>
          <S.PageControlBtn 
            onClick={() => {this.handleClickNextPage()}}
            brightness={currentPage === 500 && 'brightness(0.6)'}
            cursorStyle={currentPage === 500 && 'default'}
          >
            Next
          </S.PageControlBtn>
        </S.BtnContainer>
      </S.MovieSection>
    )
  }
}