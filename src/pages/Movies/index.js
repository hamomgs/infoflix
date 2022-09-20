import React, { Component } from 'react'
import axios from 'axios'
import * as S from './styles.js'
import PosterCard from '../../components/PosterCard/index.js'
import MovieDetails from '../../components/MovieDetails/index.js'
import Loader from '../../components/Loader/index.js'
import { GlobalStyle } from '../../styles/GlobalStyles/styles.js'

const apiURL = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY
const imageURL = process.env.REACT_APP_BASE_URL_IMAGE

export default class PopularMovies extends Component {
  state = {
    movies: [],
    currentPage: 1,
    modal: 0,
    maxPages: 500,
    isLoading: true
  }

  componentDidMount() {
    this.getMovies()

    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 2000)
  }

  componentDidUpdate(_, prevState) {
    const { currentPage, modal } = this.state
    const header = document.querySelector('#header')
    const footer = document.querySelector('#footer')
    header.style.background = '#0F2133'
    footer.style.position = 'initial'

    if (prevState.currentPage !== currentPage) {
      this.getMovies()
    } else if (modal !== 0) {
      window.scrollTo(0, 0)

      setTimeout(() => {
        this.setState({
          isLoading: false
        })
      }, 2000)
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
    const { currentPage, movies, modal, isLoading } = this.state

    return (
      isLoading ? <Loader /> :
      <S.MovieSection>
        <GlobalStyle overflow={modal !== 0 ? 'hidden' : 'auto'} />
        <S.MoviesContainer>
          {movies.map((movie, index) => (
            <div key={index}>
              <PosterCard
                  title={movie.title}
                  openDetails={() => {this.setState({modal: movie.id, isLoading: true})}}
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