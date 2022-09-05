import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const DetailsBtn = styled.button`
  position: absolute;
  top: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3vw;
  width: 50%;
  height: 3vw;
  font-weight: 600;
  font-size: 1.2vw;
  border: none;
  border-radius: 60px;
  color: #fff;
  cursor: pointer;
  opacity: 0;
  transition: all 0.5s ease;
  background-color: #DD003F;
`

export const Figure = styled.figure`
  border-radius: 5px;
  height: 23.7vw;
  overflow: hidden;
`

export const MoviePoster = styled.img`
  height: 100%;
  transition: all 0.4s ease;
`

export const PosterCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5vw;

  * {
    color: #fff;
  }

  &:hover {
    ${MoviePoster} {
      transform: scale(1.2);
      filter: brightness(0.5);
    }

    ${DetailsBtn} {
      opacity: 1;
    }
  }
`

export const Title = styled.h3`
  font-size: 1.3vw;
  width: 100%;
`

export const RatingContainer = styled.div`
  width: 100%;

  * {
    font-family: 'Nunito', sans-serif;
    font-size: 1.2vw;
  }
`

export const Star = styled(FontAwesomeIcon)`
  * {
    color: #F5B50A;
  }
`

export const DetailsIcon = styled(FontAwesomeIcon)`
  font-size: 1.1vw;
`

export const TotalRating = styled.span`
  color: #7D8995;
  font-size: calc(1.2vw - 3px);
  font-weight: bold;
`