import styled, { keyframes } from 'styled-components'

const CloseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

export const Container = styled.div`
  position: absolute;
  inset: 0;
  z-index: 99;
  display: flex;
  gap: 4vw;
  width: 100%;
  height: 100%;
  padding: 2vw 2vw 2vw 15vw;
  color: #fff;
  background-color: #020D18;
  overflow-y: auto;

  &.close {
    animation: ${CloseAnimation} 0.5s ease-in-out;
  }

  * {
    font-family: 'Nunito', sans-serif;
    text-transform: none;
  }
`
export const GenresContainer = styled.div`
  display: flex;
  gap: 1vw;
`

export const Genre = styled.p`
  font-size: 1vw;
  border: solid 1px;
  border-radius: 8px;
  padding: 10px;
`

export const BackBtn = styled.button`
  position: absolute;
  top: 2%;
  left: 1%;
  display: flex;
  align-items: center;
  gap: 0.5vw;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 1.2vw;
  font-family: 'Dosis', sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    border-bottom: solid 2px #fff;
  }
`

export const PosterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;
  min-width: 20vw;
  margin-top: 2vw;
  * {
    font-family: 'Dosis', sans-serif;
    text-transform: uppercase;
  }
`

export const PosterImg = styled.img`
  height: 30vw;
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 5%;
  height: 8%;
`

export const LinkBtn = styled.a`
  bottom: 10px;
  width: 50%;
  height: 100%;
  color: #fff;
  font-weight: 700;
  font-size: 1.1vw;
  border: none;
  border-radius: 0.7vw;
  letter-spacing: 1px;
  position: relative;
  display: flex;
  align-content: center;
  align-items: center;
  padding-left: 17%;
  background-color: #DD003F;

  &:hover {
    div {
      width: 85%;
      border-radius: 0.5vw;
    }
  }
`

export const Icon = styled.div`
  background: #fff;
  height: 2.3vw;
  width: 2.3vw;
  border-radius: 50px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 7%;
  transition: all 0.5s;

 .icon {
  transition: all 0.5s ease;
  color: #DD003F;
  width: 1.2vw;
  height: 1.2vw;
 }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5vw;
  margin-top: 2%;
`

export const Title = styled.h1`
  font-size: 3vw;
  font-family: 'Dosis', sans-serif;
  text-transform: uppercase;
`

export const Rating = styled.span`
  display: flex;
  gap: 0.5vw;
  border-radius: 0.8vw;

  * {
    font-family: 'Nunito', sans-serif;
    font-size: 1.5vw;
  }
`

export const Tagline = styled.p`
  font-style: italic;
`

export const Detail = styled.p`
  font-weight: bold;
  font-size: 1.2vw;

  span {
    font-weight: normal;
    font-size: 1.1vw;
  }
`

export const Overview = styled.span`
  width: 75%;
  font-weight: bold;
  font-size: 1.2vw;

  span {
    font-weight: normal;
    font-size: 1.1vw;
  }
`