import styled from 'styled-components'

export const Container = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 69vw;
    height: 50px;
  }
`

export const Input = styled.input`
  width: 60vw;
  height: 3.1vw;
  border: none;
  outline: none;
  color: #fff;
  padding: 0 1%;
  font-family: 'Nunito', sans-serif;
  font-weight: 300;
  text-transform: none;
  background-color: #233A50;

  &::placeholder {
    color: #fff;
    font-size: 1.2vw;
  }
`

export const SearchBtn = styled.button`
  width: 9.5vw;
  height: 3.1vw;
  border: none;
  color: #fff;
  font-size: 1.3vw;
  font-weight: bold;
  background-color: #233A50;
  cursor: pointer;
`
