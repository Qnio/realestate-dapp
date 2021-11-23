import styled from "styled-components";

export const SearchViewSection = styled.div`
  display: grid;
  grid-template-areas: "result ." 
                        "list map";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 4fr;
  padding-top: 2rem;
  padding-left: 3rem;
  height: 94vh;
`;

export const SearchResultInfo = styled.div`
  grid-area: result;
  padding-top: 4rem;
  padding-left: 2rem;
`;

export const SearchViewContainer = styled.div`
  grid-area: list;
  //border: 1px solid lightgray;
  overflow-y: scroll;
  perspective: 1px;
  transform-style: preserve-3d;
  
  
  
  &::-webkit-scrollbar {
    display: none;;
  }

`;

export const SearchViewMapContainer = styled.div`
  grid-area: map;
  //border: 1px solid lightgray;
  height: auto;
`;
