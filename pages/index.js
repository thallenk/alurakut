import Box from "../src/components/Box/index"
import MainGrid from "../src/components/MainGrid/index"
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons"
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations/index"
// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

function ProfileSidebar (props){
  return (
    <Box>
      <img src= {`https://github.com/${props.gitusuario}.png`} alt ="perfilUsuario"></img>
      <h2 className = "subTitle">Thállen Kettyllen</h2>
    </Box>
  )
}

export default function Home() {
  const usuario = "thallenk";
  const pessoasFavoritas = [
    'juunegreiros',  
    'rafaballerini', 
    'isadorastan', 
    'rebeccamanzi' ]
  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        {/*style = {{ gridArea: 'profileArea'}}  tem que declarar as coisas do css como um objeto, ou seja usando o 'bigodinho'= {{}} */}
        <div className="profileArea" profileArea >
          {/* Como o box é algo que irei usar bastante no projeto, fica interessante transformá-lo em componente.... */}
          {/* <Box>
            <img src= {`https://github.com/${usuario}.png`} alt ="perfilUsuario"></img>
          </Box> */}
          <ProfileSidebar  gitusuario = {usuario} />
        </div>

        <div className="welcomeArea" welcomeArea >
          <Box>
            <h1 className = "title">
              Bem vindo
            </h1>
            <OrkutNostalgicIconSet/>
  
          </Box>
        </div>

        <div className="profileRelationsArea" profileRelationsArea >
          <ProfileRelationsBoxWrapper>
            <h2 className ='smallTitle'>
              Meu Clã dev girls ({pessoasFavoritas.length})
            </h2>

            <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return (
                <li>
                  <a href = {` /users/${itemAtual}`} key={itemAtual}>
                  <img src= {`https://github.com/${itemAtual}.png`}/>
                  <span>{itemAtual}</span>
                  </a>
                </li>
              )
            })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
