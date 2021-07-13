import styled from 'styled-components'

const MainGrid = styled.main`
  display:grid;
  width:100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 30px;
  .profileArea{
    display:none;
    @media(min-width:860px){
      display: block;
    }
  }

  @media(min-width:860px){
    max-width:1110px;
    display:grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    //largura da primeira coluna, segunda e terceira coluna respectivamente
    grid-template-columns:160px 1fr 312px;
  }
  /* img {
      width: 100%;
      height: auto;
      display: flex;
      
  } */
`;

export default MainGrid;