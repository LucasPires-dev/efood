import styled from "styled-components";
import { cores } from "../../styles";

export const HeaderBar = styled.header`
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
`

export const Logo = styled.img`
    display: block;
    margin: 0 auto;

`
export const Nav = styled.a`
    font-family: "Roboto";
    font-weight: 900;
    font-size: 18px;
    line-height: 21.09px;
    letter-spacing: 0%;
    text-align: center;
    text-decoration: none;
    color: ${cores.rosaEscuro};
`

interface ContainerHeaderProps {
    hero: boolean;
  }

export const ContainerHeader = styled.div<ContainerHeaderProps>`
    display: ${({hero}) => hero ? 'inline': 'grid' };
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
`

export const InfoCarrinho = styled.span`
    display: inline-block;
    font-family: "Roboto";
    font-weight: 900;
    font-size: 18px;
    line-height: 21.09px;
    letter-spacing: 0%;
    text-align: center;

`
export const HeroText = styled.strong`
    width: 539px;
    margin: 0 auto;
    margin-top: 136px;
    display: block;
    font-family: "Roboto";
    font-weight: 900;
    font-size: 36px;
    line-height: 42.19px;
    letter-spacing: 0%;
    text-align: center;
`