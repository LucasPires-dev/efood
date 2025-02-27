import { createGlobalStyle } from "styled-components";

export const cores = {
    rosaClaro: "#FFEBD9",
    rosaEscuro: "#E66767",
    default: "#FFFFFF"

}

const GlobalStyle = createGlobalStyle`
   body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", serif;
    background: ${cores.rosaClaro};
    color: ${cores.rosaEscuro}
   }
`
export default GlobalStyle