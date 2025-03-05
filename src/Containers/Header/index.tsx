import { ContainerHeader, HeaderBar, HeroText, InfoCarrinho, Logo, Nav } from "./styles"
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import { Container } from "../../styles"

type Props = {
    hero?: boolean
}

const Header = ({hero = false}: Props) => {
    return(<>
        <HeaderBar style={{backgroundImage: `url(${fundo})`, backgroundRepeat: 'repeat'}}>
            <Container>
                <ContainerHeader hero={hero}>
                    {!hero && <Nav href="/">Restaurantes</Nav>}
                    <Logo src={logo}/>
                    {!hero && <InfoCarrinho>0 Produtos no carrinho</InfoCarrinho>}
                </ContainerHeader>
                    {hero && <HeroText>Viva experiências gastronômicas <br/> no conforto da sua casa</HeroText>}
            </Container>
        </HeaderBar> 
    </>)
}

export default Header