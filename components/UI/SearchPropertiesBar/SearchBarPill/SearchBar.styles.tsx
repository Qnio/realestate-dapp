import styled, { keyframes } from "styled-components";


const barAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-30px)
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    {
`;

export const NavFormContainer = styled.div`
    display: flex;
    align-items: center;
    row-gap: 3.2rem;
    flex-direction: column;
    padding-top: 3.2rem; 
    animation-name: ${barAnimation};
    animation-duration: .8s;
`;

export const FormContainer = styled.form`
    width: 80rem;
    display: flex;
    background: #FFFFFF;
    
    //border-radius: 5rem;
`;


export const FormElement = styled.div<{ searchButton?: boolean}>`
    position: relative;
    flex-basis: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
   
    &:not(:first-child):nth-child(n+1) {
        &:before {
            position: absolute;
            content: '';
            height: 30px;
            width: 1px;
            left: 0;
            background-color: lightgrey;
            transition: all .4s ease-out;
        }
    }
    
    //&:hover:before {
    //    height: 0;
    //    opacity: 0;
    //}
    //
    //&:hover + div:before {
    //    height: 0;
    //    opacity: 0;
    //}
    
    ${({searchButton}) => searchButton &&`
        flex-basis: 10%;
        align-items: center;
        
       
    `}
`;

export const PriceCounter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    border-bottom: 1px solid lightgrey;
  
`;

export const PriceAmount = styled.div`
   
`;

export const LocationList = styled.div`
  max-height: 35rem;
  overflow-y: scroll;
  scroll-behavior: smooth;


  &::-webkit-scrollbar {
    width: 8px;     
  }

  &::-webkit-scrollbar-track {
    background: transparent;       
  }

  &::-webkit-scrollbar-thumb {
    background-color: lightgrey;
    border: 3px solid white;
    height: 32px;
  }
`;




