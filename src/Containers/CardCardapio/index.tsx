import { useState } from "react"
import ModalPratos from "../ModalPratos"
import { Button, CardContainer, DescriptionCard, Image, TextTitle } from "./styles"


interface Props {
    id: number
    urlImage: string
    title: string
    description: string 
    portion: string
    value: number
}

const CardCardapio = ({id, urlImage, title, description, portion, value }: Props) =>{

    const [modalOpen, setModalOpen] = useState(false)
    return(
            <>  
                <ModalPratos id={id} title={title} description={description} urlImage={urlImage} open={modalOpen} onClick={setModalOpen} portion={portion} value={value}/>
                <CardContainer onClick={ () => setModalOpen(true)}>
                    <Image src={urlImage} />
                    <TextTitle>{title}</TextTitle>
                    <DescriptionCard>{description}</DescriptionCard>
                    <Button>Adicionar ao carrinho</Button>                    
                </CardContainer>
            </>
            )
}

export default CardCardapio