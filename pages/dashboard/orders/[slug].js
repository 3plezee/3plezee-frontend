import { Card, Grid, Text, Table, Spacer } from "@nextui-org/react";
import DasboardLayout from "../../../components/Layout/layout";
import { useSession, signIn, signOut } from "next-auth/react";
import { useMediaQuery } from "../../../components/mediaQuery";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SubTotalCalculator from "../../../components/cartController/subTotalCalculator";
import { Zoom } from "react-awesome-reveal";
import React from "react";
import CapitalizeFirstCharacter from "../../../components/textComponent/capitalizeFirstCharacter";
// import Image from "@nextui-org/react";
import Image from "next/image";

export default function DashboardOrder() {
  const [data, setData] = useState(undefined);
  const { data: session } = useSession();
  const isMd = useMediaQuery(960);
  const router = useRouter();
  const { slug } = router.query;

  const getOrder = async () => {
    let res = await fetch(`/api/orders/${slug}`, {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${session?.accessToken}`,
      }),
    });
    let response = await res.json();
    if (res.ok) {
      setData(response.data);
      console.log("response", response);
    }
  };
  useEffect(() => {
    if (!session) {
      return signIn();
    } else {
      if (slug) {
        getOrder();
      }
    }
  }, [slug]);

  const getAttr = (param) => {
    console.log("asdc", param["color"], param);

    let y = param.replace(/'/gi, '"');
    y = `${y}`;
    y = JSON.parse(y);
    return y;
  };

  return (
    <DasboardLayout>
      <div className="d-flex flex-wrap justify-content-between mb-4">
        <Text
          b
          css={{
            fontSize: "$2xl",
          }}
        >
          {data?.order_id}
        </Text>
        <Text
          b
          css={{
            fontSize: "$2xl",
          }}
        >
          Status: {data?.status}
        </Text>
      </div>

      <Grid.Container>
        <Grid xs={isMd ? 12 : 6} direction={"column"}>
          {/* <h2>Contact Details</h2> */}

          <Text h2>Contact Details</Text>

          <Text>
            Name: {data?.customer.first_name} {data?.customer.first_name}
          </Text>
          {/* <Text>Email: {data?.customer.email}</Text> */}
          <Text>Order Id: {data?.order_id}</Text>
          <Text>Quantity: {data?.quantity}</Text>
          <Text>Total: {data?.total}</Text>
          <Text>Shipping Address: {data?.shipping_address}</Text>
          <Text>Postal code: {data?.postal_code}</Text>
          <Text>Phone Number: {data?.phone_number}</Text>
          <Text>Status: {data?.status}</Text>
          <Text>Payment Method: {data?.payment_method}</Text>
          <Text>
            Confirm Payment: {data?.confirm_payment ? "paid" : "pending"}
          </Text>
        </Grid>

        <Grid xs={isMd ? 12 : 6} direction="column">
          <Text className="mt-3 mt-md-0 mb-3 mb-md-0" h2>
            Order Items
          </Text>
          {data?.order_items.map((item, index) => {
            return (
              <Zoom key={index} triggerOnce cascade>
                <Grid.Container
                  key={index}
                  css={{ padding: isMd ? "0" : "20px" }}
                >
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
                        alt=""
                        src={"/images/cap.jpg"}
                        width={700}
                        height={700}
                        sizes={"100vw"}
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
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
                        {item.product_name.toLocaleLowerCase()}
                      </Text>
                      <div className="d-grid">
                        {Object.values(getAttr(item.product_attribute)).map(
                          (e, index) => {
                            return (
                              <React.Fragment key={index}>
                                <Text className="mt-0 mb-0" span>
                                  {CapitalizeFirstCharacter(e)}
                                </Text>
                              </React.Fragment>
                            );
                          }
                        )}
                      </div>
                    </Grid>
                  </Grid>

                  <Grid className="d-flex justify-content-center align-items-center">
                    <Text b css={{ textAlign: "end" }}>
                      $ {item.product_price}
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
            <Grid
              css={{ display: "flex", justifyContent: "flex-end" }}
              xs={"6"}
            >
              <Text css={{ fontSize: "large" }} b>
                $ {data?.total}
              </Text>
            </Grid>
          </Grid.Container>

          {/* <Grid.Container className="px-3">
            <Grid xs={"6"}>
              <Text css={{ fontSize: "large" }}>Shipping</Text>
            </Grid>
            <Grid
              css={{ display: "flex", justifyContent: "flex-end" }}
              xs={"6"}
            >
              <Text css={{ fontSize: "large" }} b>
                $ 20
              </Text>
            </Grid>
          </Grid.Container> */}

          <hr />
          <Grid.Container className="px-3">
            <Grid xs={"6"}>
              <Text css={{ fontSize: "x-large" }}>Total</Text>
            </Grid>
            <Grid
              css={{ display: "flex", justifyContent: "flex-end" }}
              xs={"6"}
            >
              <Text css={{ fontSize: "x-large" }} b>
                $ {data?.total}
              </Text>
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </DasboardLayout>
  );
}
