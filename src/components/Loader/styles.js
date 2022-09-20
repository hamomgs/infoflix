import styled, { keyframes } from 'styled-components'

const SpinRight = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const SpinLeft = keyframes`
  100% {
    transform: rotate(-360deg);
  }
`

export const Container = styled.div`
  position: absolute;
  top: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10vw;
  width: 100%;
  height: 100vh;
  background-color: #020D18;
`

export const Logo = styled.figure`
  max-width: 250px;
  width: 15vw;
  user-select: none;
  pointer-events: none;

  img {
    width: 100%;
  }
`

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90px;
  width: 8vw;
  max-height: 90px;
  height: 8vw;
  border: 8px solid #DCF836;
  border-radius: 50%;
  border-top: 8px solid transparent;
  animation: ${SpinLeft} 2s linear infinite;
`

export const InsideLoader = styled.div`
  max-width: 40px;
  width: 3vw;
  max-height: 40px;
  height: 3vw;
  border: 8px solid #DD003F;
  border-radius: 50%;
  border-top: 8px solid transparent;
  animation: ${SpinRight} 0.8s linear infinite;
`