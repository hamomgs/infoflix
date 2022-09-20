import React from 'react'
import { Link, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Home from '../../pages/Home/index.js'
import PopularMovies from '../../pages/Movies/index.js'
import TvShows from '../../pages/TvShows/index.js'
import Logo from '../../assets/infoflix-logo.png'
import SearchInput from '../SearchInput/index.js'
import Search from '../../pages/Search/index.js'
import * as S from './styles.js'

export default function Header() {
  const navigate = useNavigate()

  const  handleClickSearch = () => {
    const searchInput = document.querySelector('#searchInput')

    if (!searchInput.value.match(/^[ \t]+$/) && searchInput.value !== '') {
      navigate(`/search/${searchInput.value}`)
    }
    searchInput.value = ''
  }

  return (
    <div>
      <S.HeaderContainer id='header' >
        <S.Logo>
          <img src={Logo} alt="infoflix logo" />
        </S.Logo>
        <S.Nav>
          <S.Ul>
            <S.NavLink>
              <Link to='/home'>Home</Link>
            </S.NavLink>
            <S.NavLink>
              <Link to='/movies'>Movies</Link>
            </S.NavLink>
            <S.NavLink>
              <Link to='/tv-shows'>Tv Shows</Link>
            </S.NavLink>
          </S.Ul>
        </S.Nav>
        <SearchInput handleClickSearch={() => handleClickSearch()} />
      </S.HeaderContainer>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/movies' element={<PopularMovies />} />
        <Route path='/tv-shows' element={<TvShows />} />
        <Route path='/search/:search' element={<Search />} />
      </Routes>
    </div>
  )
}