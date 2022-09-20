import React, { Component } from 'react'
import { GlobalStyle } from './styles/GlobalStyles/styles.js'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/index.js'
import Footer from './components/Footer/index.js'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Footer />
      </BrowserRouter>
    )
  }
}