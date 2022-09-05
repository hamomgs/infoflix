import styled from 'styled-components'

export const TvShowSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2vw;
`

export const TvShowsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2vw;
  width: 100%;
  background-color: #020D18;
`

export const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 2vw 0;
`

export const PageControlBtn = styled.button`
  width: 8vw;
  height: 3vw;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  cursor: ${({ cursorStyle }) => cursorStyle || 'pointer'};
  filter: ${({ brightness }) => brightness || 'brightness(1)'};
  transition: all 0.5s ease;
  background-color: #DD003F;
`