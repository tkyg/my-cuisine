import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  width: 30%;
  margin: 2% 0.1% 1%;
  padding: 1em;
  text-decoration: none;
  color: white;
  background-color: #ccc3be;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  font-family: "Inter";
  font-size: larger;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
    color: #ccae68;
  }
`;

export const DivLink = styled.div`
text-align: center;
@media(max-width: ${({ theme }) => theme.mobile}) {
    /* flex-direction: column; */
    margin-bottom: 40px 0 30px;
}
`