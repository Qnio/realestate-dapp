import styled from "styled-components";

export const BackPanel = styled.div<{ active: boolean }>`

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

export const DropdownGroup = styled.div<{ active: boolean }>`

  position: relative;
  height: 7rem;
  //border-radius: 40px;
  transition: .4s all;
 

  &:hover {
    background-color: #EBEBEB;
    // border: 1px solid;
    // border-color: transparent #dee2e6 transparent transparent;
  }

  ${({active}) => active && `
        background-color: #EBEBEB;
         box-shadow: 0 0px 7px rgb(0 0 0 / 30%), 
                    -23px 0 27px -26px rgb(0 0 0 / 80%), 
                     17px 0 27px -23px rgb(0 0 0 / 80%), 
                     inset 0 0 1px rgb(0 0 0 / 10%);
        `}
`;

export const DropdownContent = styled.div<{ active: boolean }>`
  display: none;
  ${({active}) => active && `
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    width: 400px;
    height: auto;
    background-color: white;
    padding: 1rem 2rem;
    z-index: 1100;
    //border-radius: 32px !important;
    box-shadow: 0px 6px 20px rgb(0 0 0 / 20%) !important;
    margin-top: 12px !important;
    `}
`;

export const DropdownLabel = styled.div`
  padding: 2rem 2.6rem;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.6rem;
  cursor: pointer;
`;

export const DropdownInput = styled.input<{ type: string }>`
 
  border: none;
  display: flex;
  width: 100%;
  background-color: transparent;
  color: grey;
  font-size: 1.2rem;
  font-weight: 200;

  &:focus {
    outline: none;
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

export const DropdownLabelValue = styled.div<{ error?: boolean }>`
  color: grey;
  font-size: 1.2rem;
  font-weight: 300;

  ${({error}) => error && `
    color: red;
   `}
`;


export const ErrorIconContainer = styled.div<{ displayError?: boolean }>`
  display: none;

  ${({displayError}) => displayError && `
    color: #FF385C;
    display: flex;
    position: absolute;
    top: 24px;
    right: 13px;
  `}
`;

