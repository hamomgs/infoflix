import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3vw;
  padding: 0.5vw 1vw;
  background-color: #0F2133;
`

export const Logo = styled.figure`
  max-width: 100px;
  user-select: none;
  pointer-events: none;
  
  img {
    width: 100%;
  }
`

export const Nav = styled.nav`
  * {
  color: #fff;
  }
`

export const Ul = styled.ul`
  display: flex;
  gap: 1vw;
`