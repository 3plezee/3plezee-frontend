import {
  Text,
  Grid,
  Switch,
  useTheme,
  Popover,
  Card,
  Spacer,
  Button,
} from "@nextui-org/react";
import { useMediaQuery } from "../mediaQuery";
import { useTheme as useNextTheme } from "next-themes";
import { storeContext } from "../../components/context/Store";
import { MoonIcon } from "../Navbar/MoonIcon";
import { SunIcon } from "../Navbar/SunIcon";
import SubTotalCalculator from "../cartController/subTotalCalculator";
import styles from "./styles.module.css";
import Button2 from "../Buttons/Button2";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import ButtonLink from "../Buttons/ButtonLink";
import { Zoom } from "react-awesome-reveal";

function Mfooter(params) {
  const { state, dispatch } = React.useContext(storeContext);
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const isMd = useMediaQuery(960);
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
      {isMd && (
        <Grid.Container
          css={{
            borderTop: "white 2px solid",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            background: "var(--nextui-colors-backgroundAlpha)",
            position: "fixed",
            bottom: 0,
            height: "55px",
            overflow: "hidden",
          }}
        >
          <div className="row  w-100 px-3 py-1 g-0 gap-1 d-flex justify-content-around align-items-flex-center">
            <div className="col-1 g-grid justify-content-around mb-3">
              <Text>
                <Link className={`${styles.link}`} href="/">
                  <Image
                    src={
                      isDark ? "/svg/store-light.svg" : "/svg/store-dark.svg"
                    }
                    width="50"
                    height={"50"}
                    style={{ margin: "0" }}
                    alt=""
                  />
                </Link>
              </Text>
            </div>
            <div className="col-1 position-relative">
              <div className="cartAmount">{state.wishlist.amount}</div>

              <Text>
                <Link className={`${styles.link}`} href="/wishlist">
                  <Image
                    src={
                      isDark
                        ? "/svg/heart-light-nav.svg"
                        : "/svg/heart-dark.svg"
                    }
                    width="50"
                    height={"50"}
                    style={{ margin: "0" }}
                    alt=""
                  />
                </Link>
              </Text>

              <br />
            </div>
            <div className="col-1 position-relative">
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
                      // style={{margin:"0"}}
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
                              <Text css={{ fontSize: "small", margin: "0" }} h6>
                                {item.name}
                              </Text>

                              {Object.values(item.attributes).map(
                                (e, index) => {
                                  return (
                                    <React.Fragment key={index}>
                                      <Text className="mt-0 mb-0" span>
                                        {e}
                                      </Text>
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
              <br />
            </div>
            <div className="col-1">
              <Popover placement={"top"}>
                <Popover.Trigger>
                  <button
                    className="p-0"
                    style={{ background: "transparent", border: "none" }}
                  >
                    <Image
                      src={
                        isDark
                          ? "/svg/search-light.svg"
                          : "/svg/search-dark.svg"
                      }
                      width="50"
                      height={"50"}
                      alt=""
                      // style={{margin:"0"}}
                    />
                  </button>
                </Popover.Trigger>
                <Popover.Content>
                  <Text>Search popover</Text>
                </Popover.Content>
              </Popover>
            </div>
            <div className="col-1 d-flex ">
              <div style={{ color: "var(--nextui-colors-text)" }}>
                <Switch
                  shadow
                  color="warning"
                  checked={isDark}
                  onChange={(e) =>
                    setTheme(e.target.checked ? "dark" : "light")
                  }
                  iconOn={<SunIcon filled />}
                  iconOff={<MoonIcon filled />}
                />
              </div>
            </div>
          </div>
        </Grid.Container>
      )}
    </>
  );
}
export default Mfooter;
