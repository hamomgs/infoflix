import React, { Component } from 'react'
import { GlobalStyle } from './styles/GlobalStyles/styles.js'
import Header from './components/Header/index.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
      </div>
    )
  }
}