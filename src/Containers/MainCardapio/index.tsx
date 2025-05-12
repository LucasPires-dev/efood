import { useEffect, useState } from "react";
import { Container } from "../../styles";
import { ContainerCardapio, Grids } from "./styles";
import { useParams } from "react-router-dom";
import { Pratos, RestaurantesApi } from "../../types";
import CardCardapio from "../CardCardapio";
import HeroRestaurante from "../HeroRestaurante";

const MainCardapio = () => {
    
    type Tipos = "italiana" | "árabe" | "japonês" | "português" | "pizzaria" | "vegano";

    const { tipo } = useParams<{ tipo?: string }>(); // <--- Aceita string, pode ser inválido

    const tipoValido = (tipo: string | undefined): tipo is Tipos => {
        return ["italiana", "árabe", "japonês", "português", "pizzaria", "vegano"].includes(tipo ?? "");
    };

    const [tipoDoRestaurante, setTipoDoRestaurante] = useState<Tipos>(
        tipoValido(tipo) ? (tipo as Tipos) : "italiana"
    );

    const [dadosCardapio, setDadosCardapio] = useState<RestaurantesApi | null>(null);

    useEffect(() => {
        if (tipoValido(tipo)) {
            setTipoDoRestaurante(tipo as Tipos);
        }
    }, [tipo]);

    const tipoNumber: Record<Tipos, number> = {
        italiana: 1,
        árabe: 2,
        japonês: 3,
        português: 4,
        pizzaria: 5,
        vegano: 6,
    };

    useEffect(() => {
        const FetchData = async () => {
            try {
                const response = await fetch(
                    `https://fake-api-tau.vercel.app/api/efood/restaurantes/${tipoNumber[tipoDoRestaurante]}`
                );
                const responseJson: RestaurantesApi = await response.json();

                if (response.ok) setDadosCardapio(responseJson);
            } catch (error) {
                console.error("Erro ao buscar cardápio:", error);
            }
        };

        FetchData();
    }, [tipoDoRestaurante]);

    return (
        <>
            <HeroRestaurante urlImage={dadosCardapio ? dadosCardapio.capa : ""} title={dadosCardapio ? dadosCardapio.titulo : ""}/>
            <ContainerCardapio>                
                <Container>
                    <Grids>
                        {dadosCardapio &&
                            dadosCardapio.cardapio.map((pratos: Pratos) => (
                                <CardCardapio
                                    key={pratos.nome}
                                    urlImage={pratos.foto}
                                    description={pratos.descricao}
                                    title={pratos.nome}
                                    value={pratos.preco}
                                    portion={pratos.porcao}
                                />
                            ))}
                    </Grids>
                </Container>
            </ContainerCardapio>
        </>
    );
};

export default MainCardapio;
