import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
`;

export const Section = styled.section``;

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
