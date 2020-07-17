import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

export const Nav = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  background-color: green;
`;

export const Menu = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  background-color: red;
  padding: 15px;
  margin-right: 10px;
  cursor: pointer;

  a {
    color: white;
    text-decoration: none;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: greenyellow;
`;

export const SearchWrapper = styled.div`
  padding: 20px;
  background-color: red;
`;

export const SearchInput = styled.input``;

export const SearchButton = styled.button``;
