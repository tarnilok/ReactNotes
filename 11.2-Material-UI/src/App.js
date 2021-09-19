import "./App.css";
import Buttons from "./components/material-ui/buttons/Buttons";
import CheckBoxComp from "./components/material-ui/checkbox/CheckBoxComp";
import TextFieldComp from "./components/material-ui/text-field/TextFieldComp";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[300]
    },
    secondary: {
      main: green[300]
    } 
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <TextFieldComp />
          <CheckBoxComp />
          <Buttons />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
