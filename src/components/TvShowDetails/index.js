import React, { Component } from 'react'
import axios from 'axios'
import * as S from './styles.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import * as F from '@fortawesome/free-solid-svg-icons'

const apiURL = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY
const imageURL = process.env.REACT_APP_BASE_URL_IMAGE

export default class TvShowDetails extends Component {
  state = {
    details: [],
    videoKey: '',
    genres: []
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const id = this.props.Id
    const { data } = await axios.get(`${apiURL}/tv/${id}`, {
      params: {
        api_key: apiKey,
        language: 'en-US',
        append_to_response: 'videos'
      }
    })

    const genres = data.genres.map(item => {
      return {
        ...item
      }
    })

    const convert = (minutes) => {
      const hours = Math.floor(minutes/ 60);         
      const min = minutes % 60
      const hourText = (`00${hours}`).slice(-2)
      const minutesText = (`00${min}`).slice(-2)
      let epRuntime

      if (min > 0) {
        if (hours > 1) {
          epRuntime = `${hourText}hrs ${minutesText}min.`
        } else if (hours < 1) {
          epRuntime = `${minutesText} minutes`
        } else {
          epRuntime = `${hourText}hr ${minutesText}min.`
        }
      } else {
        if (hours > 1) {
          epRuntime = `${hourText}hrs`
        } else if (hours < 1) {
          epRuntime = `${minutesText} minutes`
        } else {
          epRuntime = `${hourText}hr`
        }
      }
      
      return epRuntime
    }

    this.setState({
      details: data,
      videoKey: data.videos.results[1] !== undefined ? data.videos.results[1].key || data.videos.results[0].key : '',
      genres: genres,
      runtime: convert(data.episode_run_time[0]),
      releaseDate: data.first_air_date.split('-').reverse().join('/'),
      vote: data.vote_average.toFixed(1),
      episodes: data.number_of_episodes,
      seasons: data.number_of_seasons
    })

    console.log(data)
  }

  handleCloseModal = () => {
    const modal = document.getElementById(this.props.Id)
    modal.classList.add('close')
    
    setTimeout(() => {
      this.props.closeModal()
    }, 400)
  }

  render() {
    const { details, videoKey, genres, runtime, releaseDate, vote, episodes, seasons } = this.state

    return (
      <S.Container id={this.props.Id}>
        <S.BackBtn onClick={() => {this.handleCloseModal()}}>
          <FontAwesomeIcon className='playIcon' icon={F.faArrowLeft}></FontAwesomeIcon>
          Back
        </S.BackBtn>
        <S.PosterContainer>
          {details.poster_path && <S.PosterImg src={`${imageURL}${details.poster_path}`} alt={details.title} />}
          <S.LinksContainer>
            <S.LinkBtn 
              href={videoKey !== '' ? `https://www.youtube.com/watch?v=${videoKey}` :
                    `https://www.youtube.com/results?search_query=trailer+${details.title}`} 
              target='_blank' rel='noreferrer'
            >
              <S.Icon>
                <FontAwesomeIcon className='icon' icon={faYoutube}></FontAwesomeIcon>
              </S.Icon>
              Trailer
            </S.LinkBtn>
            <S.LinkBtn 
              href={details.homepage ? details.homepage : `https://www.google.com/search?q=${details.name}`}
              target='_blank' rel='noreferrer'
            >
              <S.Icon>
                <FontAwesomeIcon className='icon' icon={F.faMagnifyingGlass}></FontAwesomeIcon>
              </S.Icon>
              See More
            </S.LinkBtn>
          </S.LinksContainer>
        </S.PosterContainer>

        <S.DetailsContainer>
          <S.Title>{details.name}</S.Title>
          {details.tagline && <S.Tagline>"{details.tagline}"</S.Tagline>}
          <S.GenresContainer>
            {genres.map((item, index) => (
              <S.Genre key={index}>
                {item.name}
              </S.Genre>
              ))}
          </S.GenresContainer>

          <S.Detail>
            <FontAwesomeIcon icon={F.faStar}></FontAwesomeIcon>
              {` Rating: `}
            <span>
              {vote}
            </span>
          </S.Detail>

          {details.first_air_date && 
            <div>
              <S.Detail>
                <FontAwesomeIcon icon={F.faCalendar}></FontAwesomeIcon>
                {' Release date: '}
              <span>{releaseDate}</span>
              </S.Detail>
            </div>
          }
          
          <S.Detail>
            <FontAwesomeIcon icon={F.faClapperboard}></FontAwesomeIcon>
            {' Seasons: '}
            <span>{seasons}</span>
          </S.Detail>

          <S.Detail>
            <FontAwesomeIcon icon={F.faTv}></FontAwesomeIcon>
            {' Episodes: '}
            <span>{episodes}</span>
          </S.Detail>

          {runtime !== 'aNhr' && 
            <S.Detail>
              <FontAwesomeIcon icon={F.faHourglassHalf}></FontAwesomeIcon>
              {' Episode runtime: '}
              <span>{runtime}</span>
            </S.Detail>
          }


          {details.overview && 
            <S.Overview>
              <FontAwesomeIcon icon={F.faFileLines}></FontAwesomeIcon>
              {' Overview: '}
              <span>{details.overview}</span>
            </S.Overview>
          }
        </S.DetailsContainer>
      </S.Container>
    )
  }
}