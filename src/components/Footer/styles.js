import styled from 'styled-components'

export const Footer = styled.footer`
  position: initial;
  bottom: 0;
  width: 100%;
  margin-top: 3vw;
  padding: 10px 0;
  background-color: #0F2133;

  p {
    color: #ccc;
    font-weight: 500;
    text-align: center;
    text-transform: none;
    
    @media screen and (max-width: 650px) {
      font-size: 14px;
    }

    a {
      color: #DD003F;
      text-decoration: none;
      text-transform: none;
    }
  }
`