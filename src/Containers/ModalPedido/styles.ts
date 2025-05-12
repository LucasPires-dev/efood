import styled from "styled-components";
import { cores } from "../../styles";

export const ContainerModal = styled.div<{ isOpen: boolean }>`
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    align-items: center;
    justify-content: flex-end;
    z-index: 100;
    
`
export const CardModal = styled.div`
    background-color: ${cores.rosaEscuro};
    color: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px 0 0 16px;
    height: 100vh;
    width: 360px;
    position: relative;   
    padding :8px ;
 `
export const CartList = styled.ul`
    display: grid;
    grid-auto-rows: 100px;
    grid-template-columns: 100%;
    row-gap: 16px;
    padding: 0;
    color: ${cores.rosaEscuro};
    padding-top: 16px;
    height: calc(100vh - 145px);
`
export const CartItem = styled.li`
    display: grid;    
    grid-template-columns: 84px auto;
    column-gap: 16px;
    background-color: ${cores.rosaClaro};
    border-radius: 8px;
    padding: 8px;
    position: relative;

    i {
        img {
        width: 16px;
        position: absolute;
        right: 8px;
        bottom: 8px;
    }
    }
`

export const CartImage = styled.img`
    width: 84px;
    height: 84px;
    border-radius: 16px;    
`
export const CartTitle = styled.h3`
    font-family: Roboto;
    font-weight: 900;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: left;
    margin-top: 0;    
`
export const ModalButton = styled.button`
    display: block;
    background-color: ${cores.rosaClaro};
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    color: ${cores.rosaEscuro};
    padding: 8px 0;
    border: none;
    border-radius: 8px;
    width: 100%;
    box-sizing: border-box;
    margin-top: 8px;
`
export const CardPrice = styled.div`
    background-color: ${cores.rosaEscuro};
    width: calc(100% - 16px);
    position: absolute;
    bottom: 32px;
    
        div {
        display: flex;
        justify-content: space-between;
        align-items: center; 
        font-weight: 700;
        font-size: 14px;
        line-height: 100%;
        letter-spacing: 0%;
        text-align: center;
} 
`
export const Form = styled.form`
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: auto;
    grid-gap: 8px;
    margin-bottom: 32px;
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            /* display: none; <- Crashes Chrome on hover */
            -webkit-appearance: none;
            margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
        }

        input[type=number] {
            -moz-appearance:textfield;
        }
`

export const Label = styled.label<{widthInput?: number}>`
    box-sizing: border-box;
    font-size: 14px;
    width: ${({widthInput}) => (widthInput? `${widthInput}%`: '100%')};
    display: block;
    padding-bottom: 8px;
`

export const Input = styled.input<{widthInput?: number}>`
    box-sizing: border-box;
    height: 32px;
    width: ${({widthInput}) => (widthInput? `${widthInput}%`: '100%')};
`
export const DivRow = styled.div<{col1?: number, col2?: number}>`
    display:  grid;
    grid-gap: 8px;
    grid-template-columns: ${({col1, col2}) => (col1 && col2? `${col1}fr ${col2}fr`: 'auto auto')};
    grid-template-rows: auto;
`
export const Titulo = styled.p`
    font-weight: 700;
    font-size: 16px;
    color: #FFEBD9;
    margin-top: 32px;
`
export const Mensagem = styled.div`
    p {
        font-weight: 400;
        font-size: 14px;
        color: #FFEBD9;
    }
`