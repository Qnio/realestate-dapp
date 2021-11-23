import styled from "styled-components";


export const ClearInputContainer = styled.div<{ isClearable?: boolean }>`
  display: none;

  ${({isClearable}) => isClearable && `
    display: flex;
    position: absolute;
    top: 50%;
    right: 1rem;
 
    
    & > button {
        padding: 0;
    }
    
  `}
`
