import React from "react";
import Header from "./components/Header";
import Container from "./components/styled/Container.styled";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styled/Global.styled";
import content from "./content";
import Card from "./components/Card";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },

  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
