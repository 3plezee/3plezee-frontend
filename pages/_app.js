import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { Layout } from "../components/Layout";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Montserrat, Inter, Lato } from "@next/font/google";
import "../styles/globals.css";
import { useEffect, useContext } from "react";
import { StoreProvider } from "../components/context/Store";
import { ToastContainer } from "react-toastify";
import {
  Raleway,
  IBM_Plex_Sans,
  Dancing_Script,
  Roboto_Slab,
  Work_Sans,
} from "@next/font/google";
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const raleway = Raleway({ subsets: ["latin"] });
const ibmSans = IBM_Plex_Sans({
  weight: "700",
  subsets: ["latin"],
});
const dancingScript = Dancing_Script({ subsets: ["latin"] });
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });
const workSans = Work_Sans({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  const darkTheme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
      colors: {
        // brand colors
        primaryLight: "#4d5959",
        primaryLightHover: "$green300",
        primaryLightActive: "$green400",
        primaryLightContrast: "$green600",
        primary: "#4ADE7B",
        primaryBorder: "$green500",
        primaryBorderHover: "$green600",
        primarySolidHover: "$green700",
        primarySolidContrast: "$white",
        primaryShadow: "$green500",

        gradient:
          "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
        link: "#5E1DAD",

        // you can also create your own color
        myColor: "#ff4ecd",
        linkColor: "#b59677",
        footerColor: "rgba(255, 255, 255, 0.8)",

        // ...  more colors
      },
      space: {},
      fonts: {},
    },
  });

  const lightTheme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      colors: {
        // brand colors
        primaryLight: "#4d5959",
        primaryLightHover: "$green300",
        primaryLightActive: "$green400",
        primaryLightContrast: "$green600",
        primary: "#4ADE7B",
        primaryBorder: "$green500",
        primaryBorderHover: "$green600",
        primarySolidHover: "$green700",
        primarySolidContrast: "$white",
        primaryShadow: "$green500",

        gradient:
          "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
        link: "#5E1DAD",

        // you can also create your own color
        myColor: "#ff4ecd",
        linkColor: "#b59677",
        footerColor: "#000000",

        // ...  more colors
      },
      space: {},
      fonts: {},
    },
  });

  return (
    <>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <StoreProvider>
            <style jsx global>{`
              :root {
                --raleway-font: ${raleway.style.fontFamily};
                --ibmSans-font: ${ibmSans.style.fontFamily};
                --dancing-script: ${dancingScript.style.fontFamily};
                --roboto-slab: ${robotoSlab.style.fontFamily};
                --work=sans: ${workSans.style.fontFamily};
                --monteserat-font: ${montserrat.style.fontFamily};
                --inter-font: ${inter.style.fontFamily};
              }
            `}</style>
            <Layout>
              <Component {...pageProps} />
              <ToastContainer />
            </Layout>
          </StoreProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </>
  );
}

export default MyApp;
