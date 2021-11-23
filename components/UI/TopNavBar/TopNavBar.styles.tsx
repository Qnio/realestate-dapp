import styled from "styled-components";

export const NavBar = styled.nav`
  grid-area: nav;
  border-bottom: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 3.2rem;
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
`;

export const NavItem = styled.li`
`;

export const AccountBox = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
  padding-top: 5px;
  //color: white;
  //background-color: #FF385C;
`

export const MenuPanel = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Account = styled.div`
  background-color: black;
  color: white;
  padding: 2px 10px;
`;
