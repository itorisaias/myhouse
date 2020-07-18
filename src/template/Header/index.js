import React from "react";
import { Link } from "react-router-dom";

// import Logo from "../Logo";

import {
  Container,
  Nav,
  Section,
  Menu,
  MenuItem,
  SearchWrapper,
  SearchInput,
  SearchButton,
} from "./styles";

function Header() {
  return (
    <Container>
      <Nav>
        <Menu>
          <MenuItem>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/admin">Sign in</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/contact">Contact</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/about">About</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login">Login</Link>
          </MenuItem>
        </Menu>
      </Nav>
      <Section>
        <h1>Where do you want to go today?</h1>
        <SearchWrapper>
          <SearchInput />
          <SearchButton>Buscar</SearchButton>
        </SearchWrapper>
      </Section>
    </Container>
  );
}

export default Header;
