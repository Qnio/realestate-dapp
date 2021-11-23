import styled, {css} from "styled-components";


const primaryButton = css<{bgColor: string, textColor: string}>`
  //background-color: rgba(248, 246, 249, 0.8);
  //border: none !important;
  background-color: ${props => props.bgColor || "black"} !important;
  color: ${props => props.textColor || "white"};
  display: flex;
  justify-content: center;
  align-items: center;
`;


const iconButtonWrapper = css`
  padding: 0 !important;
  margin: 0 !important;
  border: none !important;
  background-color: transparent !important;
  box-shadow: none !important;
`;

const searchButton = css`
  position: relative;
  width: 4rem;
  height: 4rem;
  background-color: #FF385C !important;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2.6rem;
  margin-left: 2.6rem;

  &:before {
    position: absolute;
    content: "Search";
    text-transform: capitalize;
    opacity: 0;
    
  }

  &:hover {
    width: 10rem;
    display: flex;
    justify-content: flex-start;

    &:before {
      display: flex;
      justify-content: flex-end;
      right: 16px;
      opacity: 1;
    }
  }

`;

const getButtonStyle = (props: any) => {
    if  (props.iconBtnWrapper) {
        return iconButtonWrapper
    } else if (props.searchBtn) {
        return searchButton
    } else {
        return  primaryButton
    }
}

export const CustomButtonStyle = styled.button`
  &,
  &:link {
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.8rem;
    display: inline-block;
    //border-radius: 10rem;
    transition: all 0.2s;
    position: relative;
    border: 1px solid #d4d4d4;
    font-size: 1.4rem;
    cursor: pointer;
  }

  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    //border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  &:hover {
    //box-shadow: 0 0.6rem 1.2rem rgba(0, 0, 0, 0.2);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active {
    outline: none;
    transform: scale(.8);
    //box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  ${getButtonStyle}
`;
