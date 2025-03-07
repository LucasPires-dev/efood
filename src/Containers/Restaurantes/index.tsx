import { useEffect, useState } from "react"
import CardRestaurante from "../CardRestaurante"
import { ContainerMainRestaurante } from "./styles"
import { Container } from "../../styles"
import {RestaurantesApi} from "../../types"

const Restaurantes = () => {

    useEffect(()=>{
        const fethData = async () =>{
            const response = await fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes');
            const responseJson = await response.json();
            setRestaurantes(responseJson)
            console.log (responseJson)
        }
        fethData()
    }, [])

    const [restaurantes, setRestaurantes] = useState<RestaurantesApi[]>()


    return(
        <>
             <Container>
                <ContainerMainRestaurante>
                    {restaurantes?.map(restaurante => <CardRestaurante urlImage={restaurante.capa} title={restaurante.titulo} description={restaurante.descricao} review={restaurante.avaliacao} type={restaurante.tipo} path={restaurante.tipo} highlighted={restaurante.destacado}/>)}
                </ContainerMainRestaurante>
            </Container>
        </>
    )
}


export default Restaurantes