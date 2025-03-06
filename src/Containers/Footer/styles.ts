import styled from "styled-components";
import { cores } from "../../styles";

export const ContainerFooter = styled.footer`
    width: 100%;
    height: 300px;
    background-color: ${cores.rosaClaro};
`

export const ImageFooter = styled.img`
    display: block;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 40px;
`

export const SocialMedia = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0 auto;
    width: 88px;
    padding: 0;
    margin-bottom: 80px;
` 
export const IconSocialMedia = styled.li`
width: 24px;
    &img {
        width: 24px; 
    }
`

export const Text = styled.p`
    font-family: "Roboto";
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    text-align: center;
    color: ${cores.rosaEscuro};
    width: 480px;
    margin: 0 auto;
`
