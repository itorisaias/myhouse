import React from "react";

import PropTypes from "prop-types";

import Footer from "./Footer";
import Header from "./Header";
import { Container, Main } from "./styles";

function Template({ children }) {
  return (
    <Container>
      <>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </>
    </Container>
  );
}

Template.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default Template;
