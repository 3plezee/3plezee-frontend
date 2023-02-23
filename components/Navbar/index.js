import { Card, Grid, Spacer, Button } from "@nextui-org/react";
import {
  Navbar,
  Text,
  Avatar,
  Dropdown,
  Input,
  Popover,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.js";
import { SearchIcon } from "./searchIcon.js";
import Link from "next/link";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import { useMediaQuery } from "../mediaQuery/index";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";
import styles from "./styles.module.css";
import { useContext, useEffect } from "react";
import Image from "next/image";
import ButtonLink from "../Buttons/ButtonLink.js";
import { useRouter } from "next/router";
import { storeContext } from "../../components/context/Store";
import React from "react";
import SubTotalCalculator from "../cartController/subTotalCalculator.js";
import { Zoom } from "react-awesome-reveal";
import { useSession, signIn, signOut } from "next-auth/react";

function NavbarWrapper(params) {
  const router = useRouter();
  const { state, dispatch } = useContext(storeContext);
  const isMd = useMediaQuery(960);
  const { setTheme } = useNextTheme();
  const { data: session } = useSession();
  const { isDark, type } = useTheme();
  useEffect(() => {
    dispatch({ type: "SET_CART" });
    dispatch({ type: "SET_WISHLIST" });
  }, []);
  const collapseItems = [
    "Store",

    "Categories",
    "Latest products",
    "Our products",
  ];

  const ChangeCart = (action, product) => {
    let prod = {
      name: product.name,
      price: product.price,
      slug: product.slug,
      attributes: product.attributes,
      quantity: 1,
    };
    if (action === "remove") {
      dispatch({ type: "CART_REMOVE_ITEM", payload: { ...prod } });
    } else if (action === "add") {
      dispatch({ type: "CART_ADD_ITEM", payload: { ...prod } });
    } else if (action === "delete") {
      dispatch({ type: "CART_DELETE_ITEM", payload: { ...prod } });
    }
  };

  return (
    <>
      <Navbar isBordered variant="floating">
        <Navbar.Toggle
          showIn="xs"
          css={{ mr: "$4" }}
          aria-label="toggle navigation"
        />
        <Navbar.Brand css={{ mr: "$4" }}>
          <AcmeLogo />
          <Text
            b
            color="inherit"
            css={{ mr: "$11", fontSize: "large", letterSpacing: "5px" }}
          >
            3PLEZEE
          </Text>
          <Navbar.Content
            css={{ gap: "15px", fontSize: "medium" }}
            enableCursorHighlight
            hideIn="xs"
            activeColor={"warning"}
            variant="highlight"
          >
            {/* <Navbar.Link  isActive > */}
            <Link className="d-flex align-items-center" href="/">
              SHOP
            </Link>

            {/* </Navbar.Link> */}
            {/* <Navbar.Link > */}
            <Link
              href={router.asPath === "/" ? "#about" : "/#about"}
              className="d-flex align-items-center"
            >
              ABOUT US
            </Link>
            {/* </Navbar.Link> */}
            {/* <Navbar.Link href={router.asPath ==='/' ? "#latest-products": "/#latest-products"} > */}
            <Link href={router.asPath === "/" ? "#contact" : "/#contact"}>
              CONTACT US
            </Link>
            {/* </Navbar.Link> */}
            {/* <Navbar.Link href={router.asPath ==='/' ? "#our-products": "/#our-products"} > */}
            {/* <Link href={router.asPath ==='/' ? "#our-products": "/#our-products"}>
              Our Products
              </Link> */}
            {/* </Navbar.Link> */}
          </Navbar.Content>
        </Navbar.Brand>
        <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Navbar.Item
            hideIn="xs"
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input
              clearable
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
            />
          </Navbar.Item>
          <Navbar.Item
            css={isMd ? { display: "none" } : { width: "25px", height: "25px" }}
          >
            <div className="position-relative d-flex align-items-center">
              <div className="cartAmount">{state.cart.amount}</div>
              <Popover placement={"top"}>
                <Popover.Trigger>
                  <button
                    className="p-0"
                    style={{ background: "transparent", border: "none" }}
                  >
                    <Image
                      src={
                        isDark ? "/svg/cart-light.svg" : "/svg/cart-dark.svg"
                      }
                      width="50"
                      height={"50"}
                      alt=""
                      style={{ cursor: "pointer" }}
                    />
                  </button>
                </Popover.Trigger>
                <Popover.Content
                  css={{
                    maxHeight: "500px",
                    overflowY: "hidden",
                    width: "300px",
                    padding: "20px",
                  }}
                >
                  <Text h3>Mini-Cart</Text>
                  <Grid.Container
                    className="gap-3 scrollbar"
                    css={{
                      maxHeight: "300px",
                      overflowY: "scroll",
                      overflowX: "hidden",
                    }}
                  >
                    {state.cart.content.map((item, index) => {
                      return (
                        <Zoom key={index} triggerOnce>
                          <Grid.Container
                            key={index}
                            css={{ height: "auto", width: "100%" }}
                          >
                            <Grid xs={6}>
                              <Card
                                isHoverable
                                isPressable
                                key={index}
                                variant="fiat"
                                css={{
                                  borderRadius: "0",
                                  marginBottom: "$5",
                                  padding: "10px",
                                }}
                              >
                                <Card.Image
                                  src={item.image.image}
                                  // css={{height: isMd ? "90px":"auto"}}
                                  showSkeleton
                                  objectFit="cover"
                                  alt="Card example background"
                                  maxDelay={10000}
                                ></Card.Image>
                              </Card>
                            </Grid>
                            <Grid direction="column" className="p-1" xs={6}>
                              <Text css={{ margin: "0" }} h6>
                                {item.name}
                              </Text>

                              {Object.values(item.attributes).map(
                                (e, index) => {
                                  return (
                                    <React.Fragment key={index}>
                                      <Text className="mt-0 mb-0">{e}</Text>
                                    </React.Fragment>
                                  );
                                }
                              )}

                              <Text css={{ fontSize: "small", margin: "0" }}>
                                ${item.price}{" "}
                              </Text>

                              <Spacer />
                              <Grid className="d-flex gap-1 align-items-center">
                                <div
                                  style={{ width: "20%", cursor: "pointer" }}
                                >
                                  <Image
                                    onClick={() => ChangeCart("delete", item)}
                                    src={
                                      isDark
                                        ? "/svg/trash-dark.svg"
                                        : "/svg/trash-light.svg"
                                    }
                                    width="15"
                                    height={"15"}
                                    alt=""

                                    // style={{margin:"0"}}
                                  />
                                </div>
                                <div
                                  className={`${styles.miniCartBtnWrapper} mb-1`}
                                >
                                  <div className={`${styles.miniCartBtn}`}>
                                    <button
                                      style={{
                                        height: "100%",
                                        border: "none",
                                        color: "#b59677",
                                        fontWeight: "bolder",
                                        fontSize: "30px",
                                      }}
                                      disabled={
                                        item.quantity <= 0 ? true : false
                                      }
                                      className="btn d-flex align-items-center"
                                      onClick={() => ChangeCart("remove", item)}
                                    >
                                      -
                                    </button>
                                  </div>
                                  <div className={`${styles.miniCartCount}`}>
                                    <button
                                      style={{
                                        height: "100%",
                                        border: "none",
                                        color: "#b59677",
                                        fontSize: "20px",
                                      }}
                                      disabled={
                                        item.quantity <= 0 ? true : false
                                      }
                                      className="btn d-flex align-items-center"
                                    >
                                      {item.quantity}
                                    </button>
                                  </div>
                                  <div className={`${styles.miniCartBtn}`}>
                                    <button
                                      style={{
                                        height: "100%",
                                        border: "none",
                                        color: "#b59677",
                                        fontWeight: "bolder",
                                        fontSize: "25px",
                                      }}
                                      disabled={
                                        item.quantity <= 0 ? true : false
                                      }
                                      className="btn d-flex align-items-center"
                                      onClick={() => ChangeCart("add", item)}
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              </Grid>
                            </Grid>
                          </Grid.Container>
                        </Zoom>
                      );
                    })}
                  </Grid.Container>
                  <Spacer />
                  <Text h5>
                    Sub total: $ {SubTotalCalculator(state.cart.content)}
                  </Text>
                  <Text>
                    {" "}
                    Taxes, shipping and discounts codes calculated at checkout
                  </Text>
                  <Grid.Container className="d-flex justify-content-between">
                    <ButtonLink text="Cart" href="/cart" />
                    <ButtonLink text="Checkout" href="/checkout" />
                  </Grid.Container>
                </Popover.Content>
              </Popover>
            </div>
          </Navbar.Item>
          <Navbar.Item
            css={isMd ? { display: "none" } : { width: "25px", height: "10px" }}
          >
            <div className="position-relative w-100 ">
              <div className="cartAmount">{state.wishlist.amount}</div>
              <Link className={`${styles.link}`} href="/wishlist">
                {/* <FontAwesomeIcon size={'2x'} icon={faHeartCirclePlus} /> */}
                <Image
                  src={
                    isDark ? "/svg/heart-light-nav.svg" : "/svg/heart-dark.svg"
                  }
                  width="50"
                  alt=""
                  height={"50"}
                />
              </Link>
            </div>
          </Navbar.Item>
          <Navbar.Item
            css={isMd ? { display: "none" } : { width: "25px", height: "25px" }}
          >
            <Switch
              shadow
              color="warning"
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
              iconOn={<SunIcon filled />}
              iconOff={<MoonIcon filled />}
            />
          </Navbar.Item>
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="warning"
                  size="md"
                  // src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  src={
                    session
                      ? session?.user.image
                      : "https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  }
                />
              </Dropdown.Trigger>
            </Navbar.Item>

            {session ? (
              <Dropdown.Menu
                aria-label="User menu actions"
                color="warning"
                // onAction={(actionKey) => console.log({ actionKey })}
              >
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                  </Text>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    {session.user.name}
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key="settings" withDivider>
                  <Link className="w-100 h-100" href={"/dashboard/profile"}>
                    Dashboard
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item key="analytics" withDivider>
                  <Link className="w-100 h-100" href={"/dashboard/orders"}>
                    Orders
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item key="help_and_feedback" withDivider>
                  Help & Feedback
                </Dropdown.Item>
                <Dropdown.Item key="logout" withDivider color="error">
                  <button
                    style={{ color: "inherit" }}
                    className="btn w-100"
                    onClick={() => signOut()}
                  >
                    Sign out
                  </button>
                </Dropdown.Item>
              </Dropdown.Menu>
            ) : (
              <>
                <Dropdown.Menu>
                  {/* <Dropdown.Item  key="login" withDivider color="warning">
            <button style={{color:'inherit'}} className='btn w-100' onClick={() => signIn()}>Sign in</button>
              </Dropdown.Item> */}
                  <Dropdown.Item key="login" withDivider color="warning">
                    <button
                      style={{ color: "inherit" }}
                      className="btn w-100"
                      onClick={() => signIn()}
                    >
                      Sign up
                    </button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </>
            )}
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default NavbarWrapper;
