import React, { Component } from 'react'
import * as S from './styles.js'
import Logo from '../../assets/infoflix-logo.png'

export default class Loader extends Component {
  render() {
    return (
      <S.Container>
        <S.Logo>
          <img src={Logo} alt="logo" />
        </S.Logo>
        <S.Loader>
          <S.InsideLoader></S.InsideLoader>
        </S.Loader>
      </S.Container>
    );
  }
}