import styled, { keyframes } from 'styled-components'
import wallpaper from '../../assets/wallpaper.png'

const Animate = keyframes`
   50%{
     opacity: 1;
     transform: translateY(15px);
   }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #020D18;

  .movies {
    margin-bottom: 80px;
  }
`

export const BannerContainer = styled.div`
  background-image: url(${wallpaper});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  top: -10vh;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vw;
  width: 100%;
  height: 100vh;
  padding-top: 5%;
`

export const PosterCard = styled.div`
  img {
    height: 30vw;
  }
`

export const PostersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`

export const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1vw;

  *:nth-child(2) {
    color: #fff;
    font-size: 2vw;
    animation: ${Animate} 1.5s linear infinite
  }
`

export const About = styled.p`
  color: #fff;
  font-size: 1.5vw;
  background-color: rgba(0, 0, 0, 0.3);
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 80px;
`