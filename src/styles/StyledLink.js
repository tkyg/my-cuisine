import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../index.css"

export const StyledLink = styled(NavLink)`
  width: 30%;
  margin: 0.1% 0.1% 1%;
  padding: 20px;
  text-decoration: none;
  color: #ccae68;
  background-color: #f7efe9;
  text-align: center;
  vertical-align: baseline;
  border-radius: 5px;
  font-family: "Aboreto";
  font-size: 17px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
  &:hover {
    opacity: 0.7;
    transform: scale(0.98);
    color: #80e8e3;
  }
`;

export const DivLink = styled.div`
text-align: center;
color: #ccae68;
background-color: #f7efe9;
@media(max-width: ${({ theme }) => theme.mobile}) {
}
`