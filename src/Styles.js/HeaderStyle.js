import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #fff2eb;
  padding: 40px 0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
  h1 {
    font-size: 40px;
  }
`