import { ContainerHeader, HeaderBar, HeroText, InfoCarrinho, Logo, Nav } from "./styles"
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import { Container } from "../../styles"
import { Link } from "react-router-dom"
import ModalCarrinho from "../ModalPedido"
import { useState } from "react"

type Props = {
    hero?: boolean
}

const Header = ({hero = false}: Props) => {
    
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false)


    return(<>
        <HeaderBar style={{backgroundImage: `url(${fundo})`, backgroundRepeat: 'repeat'}}>
            <Container>
                <ContainerHeader hero={hero}>
                    {!hero && <Nav to="/">Restaurantes</Nav>}
                    <Link to={'/'}><Logo src={logo}/></Link>
                    {!hero && <InfoCarrinho onClick={() => setIsCartOpen(true)}>0 Produtos no carrinho</InfoCarrinho>}
                </ContainerHeader>
                    {hero && <HeroText>Viva experiências gastronômicas <br/> no conforto da sua casa</HeroText>}
            </Container>
            <ModalCarrinho  open={isCartOpen} onClick={setIsCartOpen}/>
        </HeaderBar> 
    </>)
}

export default Header