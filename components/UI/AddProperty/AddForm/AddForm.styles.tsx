import styled from "styled-components";


export const AddFormWrapper = styled.form`
  display: grid;
  grid-template-areas: "type market . . "
                        "bed bath car space"
                        "unit streetnumber streetname streettype"
                        "postcode state city  ."
                        "url url url url"
                        "desc desc desc desc"
                        "price sellType . ."
                        ". . .  btn";

  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 3.2rem;
`;


export const PropertyType = styled.div`
  grid-area: type;

`;

export const PropertyMarket = styled.div`
  grid-area: market;
`;

export const BedroomInput = styled.div`
  grid-area: bed;
`;

export const BathroomInput = styled.div`
  grid-area: bath;
`;

export const CarSpaceInput = styled.div`
  grid-area: car;
`;

export const PropertySpace = styled.div`
  grid-area: space;
`;




export const UnitNumber = styled.div`
  grid-area: unit;

`;
export const StreetNumber = styled.div`
  grid-area: streetnumber;

`;

export const StreetName = styled.div`
  grid-area: streetname;

`;

export const StreetType = styled.div`
  grid-area: streettype;

`;

export const PostCode = styled.div`
  grid-area: postcode;
`;
export const State = styled.div`
  grid-area: state;
`;
export const City = styled.div`
  grid-area: city;
`;

export const FormSubmitButton = styled.div`
  grid-area: btn;
  justify-self: end;
  align-self: end;

  & > button {
    border-radius: 0;
    width: 12rem;
  }
`;

export const FormInvalidMessage = styled.div`
  grid-area: err;
`;

export const PictureUrl = styled.div`
  grid-area: url;
`;

export const Description = styled.div`
  grid-area: desc;
`;

export const Price = styled.div`
  grid-area: price;
`;

export const PropertySellType = styled.div`
  grid-area: sellType;
`;
