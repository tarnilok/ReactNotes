import "./App.css";
import Buttons from "./components/material-ui/buttons/Buttons";
import CheckBoxComp from "./components/material-ui/checkbox/CheckBoxComp";
import TextFieldComp from "./components/material-ui/text-field/TextFieldComp";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import TypographyComp from "./components/material-ui/typography/TypographyComp";
import Wrapper from "./components/material-ui/wrapper/Wrapper";
import Cards from "./components/material-ui/cards/Cards";
import ButtonAppBar from "./components/material-ui/app-bar/AppBarComp";
import StyledButton from "./components/material-ui/styled-button/StyledButton";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[300],
    },
    secondary: {
      main: green[300],
    },
  },
  Typography: {
    h2: {
      fontSize: 38,
      padding: 10,
    },
    subtitle1: {
      marginBottom: 10,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <ButtonAppBar/>
        <div className="App">
          <header className="App-header">
            <StyledButton/>
            <TypographyComp />
            <Cards/>
            <TextFieldComp />
            <CheckBoxComp />
            <Buttons />
          </header>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
