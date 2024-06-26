import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { useRouter } from "next/router";
import { Navigation } from "@/components/Navigation";
import { useEffect } from "react";

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
  const { asPath, push } = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (!asPath.includes("yodelr")) {
        push("/yodelr/mine");
      }
    } else if (!asPath.includes("login") && !asPath.includes("register")) {
      push("/login");
    }
  }, [asPath, push]);

  const yodelrPage = asPath.includes("yodelr");
  return (
    <main
      className={` bg-secondary min-h-screen w-screen overflow-hidden flex ${
        yodelrPage ? "flex-row" : "flex-col items-center justify-between p-24"
      }`}
    >
      <ThemeProvider theme={theme}>
        {yodelrPage && <Navigation />}
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
