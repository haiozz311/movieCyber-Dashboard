import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#A5A4BF",
      main: "#303A52",
      dark: "#43425D",
      contrastText: "#fff",
    },
    secondary: {
      light: "#22EE6D",
      main: "#22D1EE",
      dark: "#FF6565",
      contrastText: "#fff",
    },
    error: {
      light: "#22EE6D",
      main: "#FF6565",
      dark: "#faee1c",
      contrastText: "#fff",
    },
    background: {
      default: "#dee1ec",
      grey: {
        light: "#c24d2c",
        main: "#dee1ec",
        dark: "#0e153a",
        contrastText: "#fff",
      },
    },
    text: {
      secondary: "#22D1EE",
      primary: "#303A52",
      disabled: "rgba(0, 0, 0, 0.38)",
      contrastText: "#fff",
    },
  },
  typography: {
    h3: {
      fontWeight: 300,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
  },
  spacing: 10,
});

export default theme;
