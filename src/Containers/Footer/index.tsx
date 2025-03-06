import { ContainerFooter, IconSocialMedia, ImageFooter, SocialMedia, Text } from "./styles"
import logo from "./../../assets/images/logo.png";
import facebook from "./../../assets/images/facebook.png";
import instagran from "./../../assets/images/instagran.png";
import twitter from "./../../assets/images/twitter.png";
import { Container } from "../../styles";

const Footer = () => {
    return (<>
        <ContainerFooter>
            <Container>
                <ImageFooter src={logo}/>
                <SocialMedia>
                    <IconSocialMedia>
                        <img src = {facebook} alt="Logo do Facebook"/>                       
                    </IconSocialMedia>
                    <IconSocialMedia>
                        <img src = {instagran} alt="Logo do Intagran"/>
                    </IconSocialMedia>
                    <IconSocialMedia>
                        <img src = {twitter} alt="Logo do Twitter"/>
                    </IconSocialMedia>
                </SocialMedia>
                <Text>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.</Text>
            </Container>
        </ContainerFooter>
    </>)
}

export default Footer