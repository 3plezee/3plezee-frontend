import {
  Grid,
  Spacer,
  Text,
  Collapse,
  useTheme,
  Input,
} from "@nextui-org/react";
import { useMediaQuery } from "../mediaQuery";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import Button1 from "../Buttons/Button1";
import { Categoryitems } from "../../utils/data";
import CapitalizeFirstCharacter from "../textComponent/capitalizeFirstCharacter";
import { MyStyledButton } from "../Buttons/myStyledButton";

function Footer(params) {
  const { theme, isDark } = useTheme();
  const isMd = useMediaQuery(960);

  const Information = [
    { title: "About us", link: "/information/about-us" },

    // { title: "Terms & Conditions", link: "/" },
    { title: "Shipping & Delivery", link: "#" },
    { title: "Return & Exchange", link: "#" },
    { title: "Privacy Policy", link: "/information/privacy-policy" },
  ];
  const UsefullLinks = [
    // { title: "Store Location", link: "/" },
    // { title: "Latest News", link: "/" },
    { title: "My Account", link: "/dashboard/orders" },
    { title: "Size Guide", link: "/" },
    { title: "FAQs", link: "/" },
  ];

  return (
    <footer>
      <Grid.Container
        css={{
          background: "#222222",
          paddingTop: "40px",
          paddingBottom: "10px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {isMd ? (
          <Grid>
            <Collapse.Group css={{ background: "#222222", width: "90vw" }}>
              <Collapse
                css={{ color: "White", fontSize: "$sm" }}
                color="white"
                title="GET IN CONTACT"
              >
                <div>
                  <Text css={{ letterSpacing: "10px" }} h2 color="white">
                    3PLEZEE
                  </Text>
                  <div className="d-flex gap-2 align-item-end">
                    <div>
                      <Image
                        src="/svg/map-light.svg"
                        width="20"
                        alt=""
                        height={"50"}
                      />
                    </div>
                    <Text color="white">
                      Plot 579 Peace Village Market
                      <br />
                      Lugbe, Abuja.
                    </Text>
                  </div>

                  <Spacer />
                  <div className="d-flex gap-2 align-item-center">
                    <div>
                      <Image
                        src="/svg/email-light.svg"
                        width="20"
                        alt=""
                        height={"20"}
                      />
                    </div>
                    <Text color="white"> 3plezee.emporium@gmail.com</Text>
                  </div>

                  <Spacer />
                  <div className="d-flex gap-2 align-item-end">
                    <div>
                      <Image
                        src="/svg/phone-light.svg"
                        width="20"
                        alt=""
                        height={"20"}
                      />
                    </div>
                    <Text color="white">08165817236</Text>
                  </div>
                </div>
              </Collapse>

              <Collapse title="INFORMATION">
                <div>
                  {/* <Text  color="white" h3>
                    CATEGORIES
                    </Text> */}
                  <Spacer />
                  <Text color="white">
                    {Information.map((item, index) => {
                      return (
                        <React.Fragment key={index}>
                          <Link href={`${item.link}`}>{item.title}</Link>
                          <Spacer />
                        </React.Fragment>
                      );
                    })}
                  </Text>
                </div>
              </Collapse>
              <Collapse title="USEFULL LINKS">
                <div>
                  <Spacer />
                  <Text color="white">
                    {UsefullLinks.map((item, index) => {
                      return (
                        <React.Fragment key={index}>
                          <Link href={`${item.link}`}>{item.title}</Link>
                          <Spacer />
                        </React.Fragment>
                      );
                    })}
                  </Text>
                </div>
              </Collapse>
              <Collapse title="NEWSLETTER SIGNUP">
                <div>
                  <Spacer />
                  <Grid>
                    <Input
                      clearable
                      css={{ width: '100%', marginBottom: "10px" }}
                      height="100px"
                      contentRightStyling={false}
                      placeholder="Enter email..."

                    />
                    <MyStyledButton
                      ripple
                      type={"submit"}
                      // disabled= {params.disabled ?? false}
                      auto
                      css={{ height: "45px", width: "100%", fontSize: "auto", borderRadius: "30px" }}
                      size="mysize"
                      color="mycolor"
                      disabled
                    >
                      Subscribe
                    </MyStyledButton>
                  </Grid>
                </div>
              </Collapse>
            </Collapse.Group>
          </Grid>
        ) : (
          <>
            <Grid css={{ padding: "10px" }} xs={isMd ? 6 : 3}>
              <div>
                <Text css={{ letterSpacing: "10px" }} h2 color="white">
                  3PLEZEE
                </Text>
                <div className="d-flex gap-2 align-item-end">
                  <div>
                    <Image
                      src="/svg/map-light.svg"
                      width="20"
                      alt=""
                      height={"50"}
                    />
                  </div>
                  <Text color="white">
                    Plot 579 Peace Village Market
                    <br />
                    Lugbe, Abuja.
                  </Text>
                </div>

                <Spacer />
                <div className="d-flex gap-2 align-item-center">
                  <div>
                    <Image
                      src="/svg/email-light.svg"
                      width="20"
                      alt=""
                      height={"20"}
                    />
                  </div>
                  <Text color="white"> 3plezee.emporium@gmail.com</Text>
                </div>

                <Spacer />
                <div className="d-flex gap-2 align-item-end">
                  <div>
                    <Image
                      src="/svg/phone-light.svg"
                      width="20"
                      alt=""
                      height={"20"}
                    />
                  </div>
                  <Text color="white">08165817236</Text>
                </div>
              </div>
            </Grid>
            {/* <Grid css={{ padding: "10px" }} xs={isMd ? 6 : 2}>
              <div>
                <Text color="white" h3>
                  CATEGORIES
                </Text>
                <Spacer />
                <Text color="white">
                  {Categoryitems.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <Link href={`/category/${item.name}`}>
                          {CapitalizeFirstCharacter(item.name)}
                        </Link>
                        <Spacer />
                      </React.Fragment>
                    );
                  })}
                </Text>
              </div>
            </Grid> */}
            <Grid css={{ padding: "10px" }} xs={isMd ? 6 : 3}>
              <div>
                <Text color="white" h3>
                  INFORMATION
                </Text>
                <Spacer />
                <Text color="white">
                  {Information.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <Link href={`${item.link}`}>{item.title}</Link>
                        <Spacer />
                      </React.Fragment>
                    );
                  })}
                </Text>
              </div>
            </Grid>
            <Grid css={{ padding: "10px" }} xs={isMd ? 6 : 3}>
              <div>
                <Text color="white" h3>
                  USEFULL LINKS
                </Text>
                <Spacer />
                <Text color="white">
                  {UsefullLinks.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <Link href={`${item.link}`}>{item.title}</Link>
                        <Spacer />
                      </React.Fragment>
                    );
                  })}
                </Text>
              </div>
            </Grid>
            <Grid css={{ padding: "10px" }} xs={isMd ? 6 : 3}>
              <div>
                <Text color="white" h3>
                  NEWSLETTER SIGNUP
                </Text>
                <Spacer />
                <Grid>
                  <Input
                    clearable
                    css={{ width: '100%' }}
                    height="100px"
                    width="100%"
                    contentRightStyling={false}
                    placeholder="Enter email..."
                  // contentRight={
                  //   //   <SendButton>
                  //   //     <SendIcon />
                  //   //   </SendButton>
                  //   <Button1 text="Subscribe" />
                  // }
                  />
                  <br />
                  <br />
                  {/* <Button1 text="Subscribe" /> */}
                  <MyStyledButton
                    ripple
                    type={"submit"}
                    // disabled= {params.disabled ?? false}
                    auto
                    css={{ height: "45px", width: "100%", fontSize: "auto", borderRadius: "30px" }}
                    size="mysize"
                    color="mycolor"
                    disabled
                  >
                    Subscribe
                  </MyStyledButton>
                  <Text className="text-light">Join our newsletter to get notified on new products available on our store</Text>
                </Grid>
              </div>
            </Grid>
          </>
        )}
      </Grid.Container>
      <hr />
      <Grid.Container css={{ background: "#222222" }}>
        <Grid css={{ padding: "1%", marginBottom: isMd ? "50px" : 0 }}>
          <Text css={{ textAlign: "center", color: "White" }}>
            Copyright © 2022 3plezee all rights reserved. Powered by
            @devmaesters
          </Text>
        </Grid>
      </Grid.Container>
    </footer>
  );
}
export default Footer;
