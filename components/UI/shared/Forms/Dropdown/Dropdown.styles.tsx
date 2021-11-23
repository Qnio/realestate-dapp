import styled from "styled-components";

export const DropdownBackdrop = styled.div<{ active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  background-color: transparent;
  opacity: 0;
  // transition: opacity 0.3s;

  ${({active}) => active && `
    opacity: 0.5;
    width: 100%;
    height: 100%;
    z-index: 1000
  `}
`;


export const DropdownGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const DropdownLabel = styled.label`
  font-size: 1.2rem;
`;
export const DropdownInput = styled.input<{opened: boolean}>`
  height: 4rem;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid darkgray;
  padding-left: 5px;

  background: url("/chevron-down.svg") no-repeat right 16px top 50% white;
  
  ${({opened}) => opened &&`
    background: url("/chevron-up.svg") no-repeat right 16px top 50% white;
  `}
  

  &:focus {
    color: rgba(47, 45, 45, 0.82);
    outline: none !important;
    border-bottom: 2px solid darkgray;
  }

  ${({type}) => type === 'search' && `
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance:none;
    }
  `}
`;
export const DropdownContent = styled.div<{ active: boolean }>`
  display: none;

  ${({active}) => active && `
    display: flex;
    position: absolute;
    z-index: 1100;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    width: 400px;
    height: auto;
    background-color: white;
    padding: 1rem 2rem;
    box-shadow: 0px 6px 20px rgb(0 0 0 / 20%) !important;
  `}
`;

