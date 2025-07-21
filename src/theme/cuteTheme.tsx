// src/theme/cuteTheme.ts
import { createTheme } from "@mui/material/styles";
import { pink, deepPurple, orange, common } from "@mui/material/colors";

export const getCuteTheme = (darkMode: boolean) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? deepPurple[500] : pink[300],
      },
      secondary: {
        main: darkMode ? orange[400] : common.white,
      },
      background: {
        default: darkMode ? "#1e1e2f" : "#fff0f5",
        paper: darkMode ? "#2a2a3d" : "#ffffff",
      },
    },
    typography: {
      fontFamily: `'Cherry Bomb One', cursive`,
      h6: {
        fontWeight: 700,
      },
      button: {
        textTransform: "none",
      },
    },
    shape: {
      borderRadius: 16,
    },
  });
