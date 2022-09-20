import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  gap: 1vw;
  align-items: center;
  padding: 0 3vw;
  color: #fff;
  margin-bottom: 15px;
`

export const  TvShowsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Title = styled.h2`
  font-size: 1.8vw;
`

export const SeeAll = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5vw;
  color: #fff;
  font-size: 1.1vw;

  &:hover {
    color: #DCF836;
  }
`