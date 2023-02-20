// import { Content } from "./Content.js"
import { Box } from "../Navbar/Box";
// import { Navbar } from "@nextui-org/react";

import NavbarWrapper from "../Navbar";
import Footer from "../Footer";
import Mfooter from "../Footer/mobileFooterNav";
import { SessionProvider } from "next-auth/react"
export const Layout = ({session ,children }) => (
  <>

  <Box
    css={{
      maxW: "100%",
      maxH:"100%"
    }}
  >
    <SessionProvider session={session}>
    <div className='mainBody '>
    
      <NavbarWrapper />

    {children}
    

    <Footer />
    </div>
    <Mfooter />
    </SessionProvider>
    {/* <Content /> */}
  </Box>
  </>
);