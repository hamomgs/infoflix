import React, { Component } from 'react'
import axios from 'axios'
import * as S from './styles.js'
import PosterCard from '../PosterCard'
import TvShowDetails from '../TvShowDetails/index.js'
import { GlobalStyle } from '../../styles/GlobalStyles/styles.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const apiURL = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY
const imageURL = process.env.REACT_APP_BASE_URL_IMAGE

export default class PopularTvShows extends Component {
  state = {
    tvShows: [],
    modal: 0
  }

  componentDidMount() {
    this.getTvShows()
  }

  componentDidUpdate(_, prevState) {
    const { currentPage, modal } = this.state

    if (prevState.currentPage !== currentPage) {
      this.getTvShows()
    } else if (modal !== 0) {
      window.scrollTo(0, 0)
    }
  }

  getTvShows = async () => {
    const {data: { results }} = await axios.get(`${apiURL}/tv/popular`, {
      params: {
        api_key: apiKey,
        language: 'en-US',
        page: 7
      }
    })

    const allTvShows = results.map(tvShow => {
      return {
        ...tvShow,
        image: `${imageURL}${tvShow.poster_path}`
      }
    }).slice(0, 12)

    this.setState({
      tvShows: allTvShows
    })
  }

  render() {
    const { tvShows, modal } = this.state

    return (
      <div>
        <GlobalStyle overflow={modal !== 0 ? 'hidden' : 'auto'} scroll='auto' />
        <S.Header>
          <S.Title>Tv Shows</S.Title>
          <S.SeeAll to='/tv-shows'>
            See All
            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
          </S.SeeAll>
        </S.Header>
        <S.TvShowsContainer>
          {tvShows.map((tvShow, index) => (
            <div key={index}>
              <PosterCard
                    height='22vw'
                    title={tvShow.name}
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
      </div>
    )
  }
}