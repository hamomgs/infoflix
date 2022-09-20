import React, { Component } from 'react'
import * as S from './styles.js'

export default class Footer extends Component {
  render() {
    return (
      <S.Footer id='footer'>
        <p>
        Challenge made by 
        <a href='https://www.vainaweb.com.br/' target='_blank' rel='noopener noreferrer' title='Visit page'> Vai na Web </a> 
        and developed by
        <a href='https://github.com/hamomgs' target='_blank' rel='noopener noreferrer' title='Visit page'> Hamom Silva</a>.
      </p>
      </S.Footer>
    );
  }
}