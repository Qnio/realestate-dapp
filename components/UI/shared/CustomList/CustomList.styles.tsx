import styled from "styled-components";
import {clickableListItem} from "../../../shared.styles";

export const CustomUnorderedList = styled.ul`
    list-style: none;
`;


export const ListItem = styled.li`
  ${clickableListItem};
`;

export const InfoMessage = styled.p` 
  display: flex;
  justify-content: center;
`
