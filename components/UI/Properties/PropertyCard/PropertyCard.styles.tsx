import styled from "styled-components";
import React from "react";

export const PropertyCardStyle = styled.div`
  //min-width: 35.2rem;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-areas: "presentation property-data";
  justify-self: center;
  padding: 2rem;
  background-color: #FFFFFF;
  border-bottom: 1px solid lightgray;
  margin-right: 2rem;
`;

export const PropertyGallery = styled.div`
  border: 1px solid lightgrey;
  border-radius: 22px;
  overflow: hidden;
  grid-area: presentation;
  align-self: center;
  //min-height: 100px;
  //min-width: 200px;
`;

export const PropertyData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


export const PropertyDetails = styled.div`
  display: flex;
  gap: 3.2rem;
  padding: 0 2rem;
  font-size: 1.2rem;
`;

export const PropertyAddress = styled.div`
  grid-area: property-data;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  padding: 0 2rem;
`;


export const IconAndDAtaPresentation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  
  & > svg {
    height: 100%;
  }
`;

export const PropertyType = styled.div`
  padding: 0 2rem;
`;



export const AddressStreet = styled.div`
  & > p {
    margin-bottom: 0;
  }
`;
export const AddressCity = styled.div`
  & > p {
    margin-bottom: 0;
  }
`;
export const PropertyPricing = styled.div`
  grid-area: property-data;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
 
  
  padding-left: 2rem;
 
  height: 100%;
 
  font-size: 1.8rem;

  & > p {
    margin-bottom: 0;
  }

`;

export const LinkPrice = styled.a`
  text-decoration: none;
  color: black;
  
`;
