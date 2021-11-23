import styled from "styled-components";

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  font-size: 1.2rem;
`

export const InputField = styled.input`
  height: 4rem;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid darkgray;
  padding-left: 5px;

  &:focus {
    color: rgba(47, 45, 45, 0.82);
    outline: none !important;
    border-bottom: 2px solid darkgray;
  }
`;

export const TextAreaField = styled.textarea`
  height: 10rem;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid darkgray;
  padding-left: 5px;
  
  &::placeholder {
    font-family: Poppins, sans-serif;
    font-size: 1.2rem;
  }

  &:focus {
    color: rgba(47, 45, 45, 0.82);
    outline: none !important;
    border-bottom: 2px solid darkgray;
  }
`;
