import { Card, Container, Grid, Spacer, Text, Image } from "@nextui-org/react";

import { storeContext } from "../../components/context/Store";
import React from "react";
import { useMediaQuery } from "../mediaQuery/index";
import SubTotalCalculator from "../cartController/subTotalCalculator";
import { Zoom } from "react-awesome-reveal";

function CheckoutCart() {
  const { state, dispatch } = React.useContext(storeContext);
  const isMd = useMediaQuery(960);

  return (
    <>
      {state?.cart.content.map((item, index) => {
        return (
          <Zoom key={index} triggerOnce cascade>
            <Grid.Container key={index} css={{ padding: isMd ? "0" : "20px" }}>
              <Grid xs={"8"}>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    position: "relative",
                    overflow: "unset",
                  }}
                >
                  <Image
                    // src={item}
                    css={{ width: "100px" }}
                    showSkeleton
                    src={item.image}
                    objectFit="contain"
                    alt="Card example background"
                    maxDelay={10000}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: "-10px",
                      borderRadius: "50%",
                      width: "25px",
                      height: "25px",
                      background: "#b59677",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "White",
                    }}
                  >
                    {item.quantity}
                  </div>
                </div>
                <Grid css={{ padding: "20px" }}>
                  <Text h3 css={{ margin: "0" }}>
                    {item.name.toLocaleLowerCase()}
                  </Text>
                  {Object.values(item.attributes).map((e, index) => {
                    return (
                      <React.Fragment key={index}>
                        <Text className="mt-0 mb-0" span>
                          {e}
                        </Text>
                      </React.Fragment>
                    );
                  })}
                </Grid>
              </Grid>

              <Grid className="d-flex justify-content-center align-items-center">
                <Text b css={{ textAlign: "end" }}>
                  $ {item.price}
                </Text>
              </Grid>
            </Grid.Container>
          </Zoom>
        );
      })}

      <Spacer />
      <hr />
      <Grid.Container className="px-3">
        <Grid xs={"6"}>
          <Text css={{ fontSize: "large" }}>Subtotal</Text>
        </Grid>
        <Grid css={{ display: "flex", justifyContent: "flex-end" }} xs={"6"}>
          <Text css={{ fontSize: "large" }} b>
            $ {SubTotalCalculator(state.cart.content)}
          </Text>
        </Grid>
      </Grid.Container>

      <Grid.Container className="px-3">
        <Grid xs={"6"}>
          <Text css={{ fontSize: "large" }}>Shipping</Text>
        </Grid>
        <Grid css={{ display: "flex", justifyContent: "flex-end" }} xs={"6"}>
          <Text css={{ fontSize: "large" }} b>
            $ 20
          </Text>
        </Grid>
      </Grid.Container>

      <hr />
      <Grid.Container className="px-3">
        <Grid xs={"6"}>
          <Text css={{ fontSize: "x-large" }}>Total</Text>
        </Grid>
        <Grid css={{ display: "flex", justifyContent: "flex-end" }} xs={"6"}>
          <Text css={{ fontSize: "x-large" }} b>
            $ {SubTotalCalculator(state.cart.content) + 20}
          </Text>
        </Grid>
      </Grid.Container>
    </>
  );
}
export default CheckoutCart;
