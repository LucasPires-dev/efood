import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const CardContainer = styled.li`

    border: 1px solid #E66767;
    background-color: ${cores.default};
    list-style: none;
    border-radius: 4px;
    position: relative;

    &:hover {
        border: 3px solid #E66767;
        transition: linear 0.2s;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 217px;
    border-radius: 4px 4px 0 0;
`

export const BoxTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Roboto;
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    padding: 0 8px;
`

export const TextTitle = styled.p`
    
`

export const Review = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
       
        width: 19px;
        padding-left: 4px;
    }
`

export const DescriptionCard = styled.p`
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    padding: 8px;
`

export const Button = styled(Link)`
    padding: 8px;
    text-decoration: none;
    color: ${cores.rosaClaro};
    background-color: ${cores.rosaEscuro};
    font-size: 14px;
    margin: 0 8px;
    border-radius: 8px;
    cursor: pointer;

`
export const Info = styled.span`
    font-weight: 700;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    padding: 8px;
    background-color: ${cores.rosaEscuro};
    color: ${cores.rosaClaro};
    border-radius: 4px;
    text-transform: capitalize;
    margin-left: 8px;
    display: inline-block;
`

export const BoxInfo = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
`