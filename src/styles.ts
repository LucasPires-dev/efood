import styled, { createGlobalStyle } from "styled-components";

export const cores = {
    rosaClaro: "#FFEBD9",
    rosaEscuro: "#E66767",
    fundo: "#FFF8F2",
    default: "#FFFFFF"

}

const GlobalStyle = createGlobalStyle`
   body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", serif;
        background: ${cores.fundo};
        color: ${cores.rosaEscuro};
        width: 100%;
   }
`

export const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`

export default GlobalStyle