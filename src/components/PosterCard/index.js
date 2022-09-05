import React from 'react'
import * as S from './styles.js'
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function PosterCard({ image, openDetails, title, vote }) {
  return (
    <S.PosterCard>
      <S.Figure>
        <S.MoviePoster src={image} alt={title} />
      </S.Figure>
      <S.Title>
        {title.length >= 24 ? `${title.slice(0, 20)}...` : title}
      </S.Title>
      <S.RatingContainer>
        <S.Star icon={faStar}></S.Star>
        <span> 
          {` ${vote} `}
          <S.TotalRating>/10</S.TotalRating>
        </span>
      </S.RatingContainer>
    <S.DetailsBtn onClick={openDetails}>
      <S.DetailsIcon icon={faPlus}></S.DetailsIcon>
      Details
    </S.DetailsBtn>
    </S.PosterCard>
  )
}