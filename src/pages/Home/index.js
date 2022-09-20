import React, { Component } from 'react'
import axios  from 'axios'
import * as S from './styles.js'
import PopularMovies from '../../components/PopularMovies/index.js'
import PopularTvShows from '../../components/PopularTvShows/index.js'
import Loader from '../../components/Loader/index.js'
import Carousel from 'nuka-carousel/lib/carousel.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const apiURL = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY
const imageURL = process.env.REACT_APP_BASE_URL_IMAGE

export default class Home extends Component {
  state = {
    tvShows: [],
    isLoading: true,
    modal: 0
  }

  componentDidMount() {
    const header = document.querySelector('#header')
    const footer = document.querySelector('#footer')
    header.style.background = 'transparent'
    footer.style.position = 'initial'

    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 2000)

    this.getTvShows()
  }

  getTvShows = async () => {
    const {data: { results }} = await axios.get(`${apiURL}/tv/popular`, {
      params: {
        api_key: apiKey,
        language: 'en-US'
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
    const { isLoading, tvShows } = this.state
    const settings = {
      wrapAround:true,
      slidesToShow: 1,
      autoplay: true,
      withoutControls: true,
      autoplayInterval: '3000',
      animation: 'zoom'
    }

    return (
      isLoading ? <Loader /> :
      <S.Section>
        <S.BannerContainer>
        <Carousel {...settings} style={{width:'90vw'}}>
          <S.PostersContainer>
            {tvShows.map((tvShow, index) => (
              <S.PosterCard key={index}>
                <img src={tvShow.image} alt={tvShow.name} />
              </S.PosterCard>
            )).splice(0, 4)}
          </S.PostersContainer>
          <S.PostersContainer>
            {tvShows.map((tvShow, index) => (
              <S.PosterCard key={index}>
                <img src={tvShow.image} alt={tvShow.name} />
              </S.PosterCard>
            )).splice(4, 4)}
          </S.PostersContainer>
          <S.PostersContainer>
            {tvShows.map((tvShow, index) => (
              <S.PosterCard key={index}>
                <img src={tvShow.image} alt={tvShow.name} />
              </S.PosterCard>
            )).splice(8, 4)}
          </S.PostersContainer>
        </Carousel>
        <S.Description>
          <S.About>Infoflix - finding information about your favorite movie or tv show.</S.About>
          <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
        </S.Description>
        </S.BannerContainer>
        <S.Container>
          <PopularMovies />
          <PopularTvShows />
        </S.Container>
      </S.Section>
    )
  }
}