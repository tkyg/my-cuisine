import styled from "styled-components";

export const Div = styled.div`
   display: flex;
   text-align: center;
   background-color: #fff;
   border-radius: 15px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
   margin: 10px 0;
   padding: 20px;
   flex-direction: row-reverse;

   img {
      width: 300px;
      height: 200px;
      border-radius: 10px;
      object-fit: cover;
      padding: 5px;
      margin:.2rem;

   }
   
   & > div {
      flex: 1;
   }

   @media(max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: column;
   }
`

export const Div1 = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 500px;
  max-height: 800px;
  margin: auto;
  padding: 40px;
  text-align: center;
  font-family: "'Caveat', sans-serif"
`