import styled from "styled-components";

export const PrimaryLink = styled.a`
  position: relative;
  display: flex;
  width: fit-content;
  color: black;
  text-decoration: none;
  //line-height: 2.4rem !important;
  cursor: pointer;

  &:active,
  &:visited {
    background-color: transparent;
    color: black;
    text-underline: #FF385C;

    .icon-svg {
      svg path {
        stroke: lightblue;
      }
    }
  }

  &:before {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    background: #FF385C;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: .4s transform cubic-bezier(.77, 0, .175, 1);
  }

  &:hover:before {
    transform: scaleX(1);
  }


  //&:hover {
  //  text-decoration: underline;
  //  transition: all 0.5s;
  //}

  .icon-svg {
    width: 2.4rem;
    height: 2.4rem;
    border-bottom: 1px solid white;
    z-index: 10;
    padding-left: 0.8rem;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    &-left {
      padding-left: 0;
      padding-right: 0.8rem;
    }
  }
`;
