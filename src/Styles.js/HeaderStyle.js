import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #f2eae4;
  padding: 10px 0;
  color: #ccae68;
  text-align: center;
  border-radius: 1rem;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 30px;
  }
  h1 {
    font-size: 400%;
  }
  h5 {
    font-size: 30px;
  }
`