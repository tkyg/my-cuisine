import styled from "styled-components";


export const Input = styled.input`
  box-sizing: border-box;
  width: 250px;
  padding: 5px;
  font-size: 1rem;
  border: 2px solid #eee;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  border-radius: 10px;
`

export const InputCreate = styled.input`
  box-sizing: border-box;
  padding: 10px;
  border-radius: .5rem;
  width: 150px;
  &:hover {
    background-color: #D8C4C0;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  line-height: 1.2;
  padding: 5px 10px;
  background: papayawhip;
  color: palevioletred;
`
