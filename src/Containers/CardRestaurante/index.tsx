import { BoxInfo, BoxTitle, Button, CardContainer, DescriptionCard, Image, Info, Review, TextTitle } from "./styles"
import StarReview from '../../assets/images/estrela.png'

interface Props {
    urlImage: string
    title: string
    description: string
    path: string
    review: number,
    type: string
    highlighted: boolean
}

const CardRestaurante = ({urlImage, title, description, review, type, path, highlighted}: Props) =>{
    return(
            <>
                <CardContainer>
                    <Image src={urlImage} />
                    <BoxTitle>
                        <TextTitle>{title}</TextTitle>
                        <Review>{review}<img src={StarReview}/></Review>
                    </BoxTitle>
                    <DescriptionCard>{description}</DescriptionCard>
                    <Button href={path}>Saiba mais</Button>
                    <BoxInfo>
                        {highlighted && <Info>Destaque da semana</Info>}
                        <Info>{type}</Info>
                    </BoxInfo>
                    
                </CardContainer>
            </>
            )
}

export default CardRestaurante