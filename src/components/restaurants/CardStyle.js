import styled from "styled-components";
/* .App {
  text-align: center;
} */

export const Div = styled.div`
  display:flex;
  overflow:hidden;
  box-shadow:0 2px 20px var(--clr-gray200);
  border-radius: 0.2rem;
  flex-direction:column;
  justify-content:space-around;
  border:"solid";
  margin:auto
`;
export const Image = styled.img`
  float: center;
  width:  400px;
  height: 400px;
  object-fit: cover;
  margin:auto
`;
