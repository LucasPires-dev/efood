import styled from "styled-components";
import { cores } from "../../styles";

export const CardContainer = styled.li`
    box-sizing: border-box;
    width: 100%;
    /* border: 1px solid ${cores.fundo}; */
    background-color: ${cores.rosaEscuro};
    list-style: none;
    border-radius: 4px;
    position: relative;
    color: ${cores.rosaClaro};
    padding: 8px;

    &:hover {
        border: 3px solid ${cores.fundo};
        transition: linear 0.2s;
    }
`
export const Image = styled.img`
        width: 100%;
        height: 167px;;
       border-radius: 4px 4px 0 0;
`

export const TextTitle = styled.p`
    font-family: Roboto;
    font-weight: 900;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    margin: 12px 0;
`

export const DescriptionCard = styled.p`
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0%;
    height: 60px;
    overflow: hidden;
    margin: 12px 0;
`

export const Button = styled.button`
    display: block;
    width: calc(100% - 16px);
    padding: 8px;
    color:  ${cores.rosaEscuro};
    background-color: ${cores.rosaClaro};
    border-radius: 8px;
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    position: absolute;
    bottom: 8px;
    left: 8px;
    cursor: pointer;

`
