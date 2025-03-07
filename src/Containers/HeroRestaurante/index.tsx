import { Banner } from "./styles"

const HeroRestaurante = ({urlImage = ""}:{urlImage: string}) => {
    return(
        <>
            <Banner style={{backgroundImage: `url(${urlImage})`, backgroundRepeat: 'no-repeat'}} />
        </>
    )
}

export default HeroRestaurante