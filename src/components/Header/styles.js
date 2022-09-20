import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 3vw;
  height: 5vw;
  padding: 0.5vw 1vw;
  background-color: #0F2133;
`

export const Logo = styled.figure`
  width: 8vw;
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

export const NavLink = styled.li`
  * {
    font-size: 1.2vw;

    &:hover {
      color: #DCF836;
    }
  }
`