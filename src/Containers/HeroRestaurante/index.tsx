import { Container } from "../../styles"
import { Banner, BannerTitle, Filtro, TypeRestaurant } from "./styles"

const HeroRestaurante = ({urlImage = "", title, typeRestaurante}:{urlImage: string, title: string, typeRestaurante: string}) => {
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
                    <TypeRestaurant>{typeRestaurante}</TypeRestaurant>
                    <BannerTitle>{title}</BannerTitle>
                </Container>
                </Filtro>
            </Banner>
        </>
    )
}

export default HeroRestaurante