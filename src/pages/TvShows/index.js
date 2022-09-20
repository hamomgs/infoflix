import React, { Component } from 'react'
import axios from 'axios'
import * as S from './styles.js'
import PosterCard from '../../components/PosterCard/index.js'
import TvShowDetails from '../../components/TvShowDetails/index.js'
import Loader from '../../components/Loader/index.js'
import { GlobalStyle } from '../../styles/GlobalStyles/styles.js'

const apiURL = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY
const imageURL = process.env.REACT_APP_BASE_URL_IMAGE

export default class PopularMovies extends Component {
  state = {
    tvShows: [],
    currentPage: 1,
    modal: 0,
    maxPages: 500,
    isLoading: true
  }

  componentDidMount() {
    const header = document.querySelector('#header')
    const footer = document.querySelector('#footer')
    header.style.background = '#0F2133'
    footer.style.position = 'initial'

    this.getMovies()

    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 2000)
  }

  componentDidUpdate(_, prevState) {
    console.log('a')
    const { currentPage, modal } = this.state

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
    const {data: { results }} = await axios.get(`${apiURL}/discover/tv`, {
      params: {
        api_key: apiKey,
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: false,
        include_video: false,
        page: currentPage
      }
    })

    const allTvShows = results.map(tvShow => {
      return {
        ...tvShow,
        image: `${imageURL}${tvShow.poster_path}`,
        title: tvShow.name
      }
    })

    this.setState({
      tvShows: allTvShows
    })
    console.log(allTvShows)
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
    const { tvShows, currentPage, modal, isLoading } = this.state

    return (
      isLoading ? <Loader /> :
      <S.TvShowSection>
        <GlobalStyle overflow={modal !== 0 ? 'hidden' : 'auto'} />
        <S.TvShowsContainer>
          {tvShows.map((tvShow, index) => (
            <div key={index}>
              <PosterCard
                title={tvShow.title}
                openDetails={() => {this.setState({modal: tvShow.id, isLoading: true})}}
                vote={tvShow.vote_average}
                image={tvShow.image}
              />
              {
                modal === tvShow.id && 
                <TvShowDetails Id={tvShow.id} closeModal={() => {this.setState({modal: 0})}} />
              }
            </div>
          ))}
        </S.TvShowsContainer>
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
      </S.TvShowSection>
    )
  }
}