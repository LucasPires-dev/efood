import styled from "styled-components";
import { cores } from "../../styles";

export const ContainerCardapio = styled.section`
    width: 100%;
    background: ${cores.fundo};
   margin: 64px auto;
`;

export const Grids = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 480px;
    grid-gap: 24px;
    padding: 0;
`
