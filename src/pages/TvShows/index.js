import React, { Component } from 'react'
import axios from 'axios'
import * as S from './styles.js'
import PosterCard from '../../components/PosterCard/index.js'
import TvShowDetails from '../../components/TvShowDetails/index.js'

const apiURL = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY
const imageURL = process.env.REACT_APP_BASE_URL_IMAGE

export default class PopularMovies extends Component {
  state = {
    tvShows: [],
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
    const { tvShows, currentPage, modal } = this.state

    return (
      <S.TvShowSection>
        <S.TvShowsContainer>
          {tvShows.map((tvShow, index) => (
            <div key={index}>
              <PosterCard
                title={tvShow.title}
                openDetails={() => {this.setState({modal: tvShow.id})}}
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