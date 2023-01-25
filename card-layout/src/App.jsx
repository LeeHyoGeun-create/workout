import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import StyledComponent from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global.styled";

const theme = {
  color: {
    card01: "#03d29f",
    card02: "#50a7ff",
    card03: "#ff7675",
  },

  size: {
    mobile: "767px",
    tablet: "1023px",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <StyledComponent>
          <Header />
          <Main />
          <Footer />
        </StyledComponent>
      </div>
    </ThemeProvider>
  );
}

export default App;
