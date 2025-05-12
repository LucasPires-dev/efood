import styled from "styled-components";
import { cores } from "../../styles";

export const Banner = styled.div`
    width: 100%;
    height: 280px;
    position: relative;
`

export const Filtro = styled(Banner)`
    background-color: rgba(0, 0, 0, 0.5);

`
export const BannerTitle = styled.strong`
    font-family: Roboto;
    font-weight: 900;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0%;
    position: absolute;
    bottom: 32px;
    color: ${cores.default};
`