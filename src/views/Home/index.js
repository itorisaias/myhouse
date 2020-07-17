import React from "react";

import Header from "../../components/Header";

import { Container } from "./styles";

function Home() {
  const handleClick = () => {
    console.log('ola')
  }

  return (
    <Container>
      <Header />
      <button onClick={handleClick}>Login</button>
    </Container>
  );
}

export default Home;
