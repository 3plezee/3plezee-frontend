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
import { useRouter } from "next/router";

import {
  Raleway,
  IBM_Plex_Sans,
  Dancing_Script,
  Roboto_Slab,
  Work_Sans,
} from "@next/font/google";
import Head from "next/head";
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

  const {
    asPath, // the value: "/question/how-do-you-get-the-current-url-in-nextjs/"
    // the value: "/question/[slug]"
  } = useRouter();

  const pathname = asPath;
  const currentPath = `https://devmaesters.com${pathname}`;
  return (
    <>
      <Head>
        <title>3PLEZEE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="icon" href="/favicon1.ico" /> */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/main-logo.jpg"
        />
        <link
          rel="icon"
          type="image/jpg"
          sizes="32x32"
          href="/images/main-logo.jpg"
        />
        <link
          rel="icon"
          type="image/jpg"
          sizes="16x16"
          href="/images/main-logo.jpg"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta charSet="UTF-8" />

        <meta property="og:title" content="3PLEZEE" />
        <meta
          property="og:image"
          content="https://3plezee.netlify.app/images/main-image.jpg"
        />
        <meta
          property="og:description"
          content="Welcome to 3plezee trendy emporium, center for all your fashion needs"
        />
        <meta property="og:url" content={currentPath} />
      </Head>
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
