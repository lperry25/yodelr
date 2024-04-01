import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

/**
 *  {
        background: "#8f7eff",
        primary: "#000099",
        secondary: "#bbb1ff",
        lightBlue: "#634bff",
        royalBlue: "#0000cc",
        purple: "#000066",
      }
 */
const theme = createTheme({
  palette: {
    primary: {
      light: "#634bff",
      main: "#000099",
      dark: "#0000cc",
      contrastText: "#fff",
    },
    secondary: {
      light: "#634bff",
      main: "#634bff",
      dark: "#000099",
      contrastText: "#000099",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-secondary">
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
