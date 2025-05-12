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
    justify-content: center;
    z-index: 100;
    
`
export const CardModal = styled.div`
    background-color: ${cores.rosaEscuro};
    color: white;
    opacity: 100%;
    display: grid;
    grid-template-columns: 280px auto;
    grid-template-rows: calc(280px);
    padding: 32px;
    column-gap: 32px;
    position: relative;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    position: relative;
 `

export const ModalImage = styled.img`
    width: 280px;
    height: 280px;
    border-radius: 16px;
`
export const ModalTitle = styled.h3`
    font-family: Roboto;
    font-weight: 900;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: left;
    margin-top: 0;

`

export const ModalDescription = styled.p`
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0%;

`
export const ModalPortion = styled(ModalDescription)`
    position: absolute;
    bottom: 80px;
    margin: 0;
`

export const ModalButton = styled.button`
    background-color: ${cores.rosaClaro};
    font-family: Roboto;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    color: ${cores.rosaEscuro};
    position: absolute;
    bottom: 32px;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
`
export const ModalButtonClose = styled.img`
    width: 16x;
    position: absolute;
    top: 27px;
    right: 32px;
`
