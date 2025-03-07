import { Button, CardContainer, DescriptionCard, Image, TextTitle } from "./styles"

interface Props {
    urlImage: string
    title: string
    description: string 
}

const CardCardapio = ({urlImage, title, description }: Props) =>{
    return(
            <>
                <CardContainer>
                    <Image src={urlImage} />
                    <TextTitle>{title}</TextTitle>
                    <DescriptionCard>{description}</DescriptionCard>
                    <Button>Adicionar ao carrinho</Button>                    
                </CardContainer>
            </>
            )
}

export default CardCardapio