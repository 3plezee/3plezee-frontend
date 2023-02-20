import {
  faBars,
  faFaceGrin,
  faGear,
  faTachometer,
  faTachometerFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import { MyStyledButton } from "../Buttons/myStyledButton";
import { useMediaQuery } from "../mediaQuery";
import styles from "./styles.module.css";

export default function DasboardLayout({ children }) {
  const isMd = useMediaQuery(960);
  const route = useRouter();
  const changeRoute = (e) => {
    route.push(`/dashboard${e}`);
  };

  return (
    <>
      <Grid className={styles.sidebarToggler}>
        <FontAwesomeIcon size={"2x"} color="white" icon={faGear} />
      </Grid>
      <Container
        css={{
          maxWidth: "1504px",
          display: "flex",
          height: "80vh",
          position: "relative",
        }}
        fluid
      >
        {/* <Grid.Container> */}

        <Grid
          className={styles.sidebar}
          xs={isMd ? 6 : 2}
          style={{ borderRight: "5px solid #222222" }}
        >
          <aside
            className="w-100"
            style={{
              background: "var(--nextui--navbarBlurBackgroundColor)",
              backdropFilter: "saturate(180%) blur(var(--nextui--navbarBlur))",
            }}
          >
            <ul className="p-0">
              <li className="mt-4"></li>

              <li className="mt-4">
                <MyStyledButton
                  // disabled= {params.disabled ?? false}
                  auto
                  css={{
                    height: "30px",
                    width: "100%",
                    fontSize: "auto",
                    background: "unset",
                    color: "Black",
                  }}
                  className={`${styles.sidebarLinks} ${
                    route.asPath === "/dashboard/orders" ? styles.active : ""
                  } `}
                  // size="mysize"
                  // color="mycolor"
                  onClick={() => changeRoute("/orders")}
                >
                  ORDERS
                </MyStyledButton>
              </li>

              <li className="mt-4">
                <MyStyledButton
                  // disabled= {params.disabled ?? false}
                  auto
                  css={{ height: "30px", width: "100%", fontSize: "auto" }}
                  //   size="mysize"
                  //   color="mycolor"
                  className={`${styles.sidebarLinks} ${
                    route.asPath === "/dashboard/profile" ? styles.active : ""
                  } `}
                  onClick={() => changeRoute("/profile")}
                >
                  PROFILE
                </MyStyledButton>
              </li>
            </ul>
          </aside>
        </Grid>
        <Grid
          className="p-2 flex"
          css={{ flexDirection: "column", overflowY: "auto", height: "80vh" }}
          xs={isMd ? 12 : 10}
        >
          {children}
        </Grid>
        {/* </Grid.Container> */}
      </Container>
    </>
  );
}
