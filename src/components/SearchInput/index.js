import React, { Component } from 'react'
import * as S from './styles.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default class SearchInput extends Component {
  render() {
    return (
      <S.Container>
        <form onSubmit={e => e.preventDefault()}>

          <S.Input type="text" id='searchInput' placeholder='Search for movies or series you want' />
          <S.SearchBtn
            onClick={this.props.handleClickSearch}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </S.SearchBtn>
        </form>
      </S.Container>
    )
  }
}