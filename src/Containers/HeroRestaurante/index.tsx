import { Container } from "../../styles"
import { Banner, BannerTitle, Filtro } from "./styles"

const HeroRestaurante = ({urlImage = "", title}:{urlImage: string, title: string}) => {
    return(
        <>
           <Banner
                style={{
                    backgroundImage: `url(${urlImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover", // <-- Faz a imagem cobrir todo o elemento
                    backgroundPosition: "center", // <-- Centraliza a imagem
                }}
            >
                <Filtro >
                <Container>
                    <BannerTitle>{title}</BannerTitle>
                    </Container>
                </Filtro>
            </Banner>
        </>
    )
}

export default HeroRestaurante