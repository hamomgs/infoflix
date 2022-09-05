import React from 'react'
import { BrowserRouter, Link, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../../pages/Home/index.js'
import PopularMovies from '../../pages/Movies/index.js'
import TvShows from '../../pages/TvShows/index.js'
import Logo from '../../assets/infoflix-logo.png'
import Search from '../Search/index.js'
import * as S from './styles.js'

export default function Header() {

  return (
    <BrowserRouter>
      <S.HeaderContainer>
      <S.Logo>
        <img src={Logo} alt="infoflix logo" />
      </S.Logo>
      <S.Nav>
        <S.Ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/movies'>Movies</Link>
          </li>
          <li>
            <Link to='/tv-shows'>Tv Shows</Link>
          </li>
        </S.Ul>
      </S.Nav>
      <Search />
      </S.HeaderContainer>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/movies' element={<PopularMovies />} />
        <Route path='/tv-shows' element={<TvShows />} />
      </Routes>
    </BrowserRouter>
  )
}