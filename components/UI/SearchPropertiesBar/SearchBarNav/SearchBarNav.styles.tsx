import styled from "styled-components";
import { underlineButton } from "../../../shared.styles";

export const NavigationBar = styled.nav`
    display: flex;
    justify-content: center
`;

export const OptionBox = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 3.2rem;
`;

export const OptionSwitcher = styled.div`
    display: flex;
`

export const OptionButton = styled.button`
    ${underlineButton};      
    color: gray;
    opacity: .8;
`;
