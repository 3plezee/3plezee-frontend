import { Container, Grid, Spacer, Text, Image, Table } from "@nextui-org/react";
import { useState } from "react";
import Button2 from "../../components/Buttons/Button2";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { storeContext } from "../../components/context/Store";
import { useContext } from "react";
import { useTheme } from "@nextui-org/react";
import ButtonLink from "../../components/Buttons/ButtonLink";
import SubTotalCalculator from "../../components/cartController/subTotalCalculator";
import { Zoom } from "react-awesome-reveal";
import { useMediaQuery } from "../../components/mediaQuery";

function Cart() {
  const isMd = useMediaQuery(960);

  const router = useRouter();
  const { isDark, type } = useTheme();
  const [terms, setTerms] = useState(false);
  const { state, dispatch } = useContext(storeContext);
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
  const submitHandler = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);

    const form_values = Object.fromEntries(formData);
    router.push("/checkout");
  };
  return (
    <Container css={{ paddingTop: "40px", maxWidth: "1504px" }}>
      <Grid.Container>
        <Grid css={{ width: "45%" }}>
          <Text b css={{ fontSize: isMd ? "medium" : "large" }}>
            Product
          </Text>
          <hr />
        </Grid>
        <Grid css={{ width: "15%" }}>
          <Text
            className="text-center"
            b
            css={{ fontSize: isMd ? "medium" : "large" }}
          >
            Price
          </Text>
          <hr />
        </Grid>
        <Grid css={{ width: "20%" }}>
          <Text
            className="text-center "
            b
            css={{ fontSize: isMd ? "medium" : "large" }}
          >
            Quantity
          </Text>
          <hr />
        </Grid>
        <Grid css={{ width: "13%", textAlign: "end" }}>
          <Text
            className="text-end"
            b
            css={{ fontSize: isMd ? "medium" : "large" }}
          >
            Total
          </Text>
          <hr />
        </Grid>
      </Grid.Container>
      {state.cart.content.length > 0 ? (
        <>
          {/* start */}
          <Zoom triggerOnce>
            <Grid.Container>
              <Table
                hoverable
                shadow
                color={"warning"}
                aria-label="Example static collection table"
                css={{
                  height: "auto",
                  minWidth: "100vw",
                }}
                selectionMode="single"
              >
                <Table.Header css={{ gap: "$10" }}>
                  <Table.Column>IMAGE</Table.Column>
                  <Table.Column>PRODUCT</Table.Column>
                  <Table.Column>PRICE</Table.Column>
                  <Table.Column>QUANTITY</Table.Column>
                  <Table.Column>TOTAL</Table.Column>
                </Table.Header>
                <Table.Body loadingState={"sorting"}>
                  {state?.cart?.content.map((item, index) => {
                    return (
                      <Table.Row css={{ gap: "$2" }} key={index}>
                        <Table.Cell>
                          <Grid css={{ width: "150px", height: "100px" }}>
                            <Image
                              // src={item}
                              css={{ height: "100px" }}
                              showSkeleton
                              src={item.image.image}
                              objectFit="contain"
                              alt="Card example background"
                              maxDelay={10000}
                            />
                          </Grid>
                        </Table.Cell>
                        <Table.Cell>{item.name.toLocaleLowerCase()}</Table.Cell>

                        <Table.Cell>{item.price}</Table.Cell>
                        <Table.Cell>
                          <div className="d-flex gap-2">
                            <div
                              onClick={() => ChangeCart("remove", item)}
                              className={styles.mainCartBtn}
                            >
                              -
                            </div>
                            <div className={styles.mainCartBtn}>
                              {item.quantity}
                            </div>
                            <div
                              onClick={() => ChangeCart("add", item)}
                              className={styles.mainCartBtn}
                            >
                              +
                            </div>
                          </div>
                        </Table.Cell>
                        <Table.Cell>{item.price * item.quantity}</Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table>
            </Grid.Container>
          </Zoom>

          {/* end */}

          <Spacer />
          <form onSubmit={submitHandler}>
            <Grid.Container className="d-flex justify-content-end">
              {/* <Grid>
                    <Text css={{fontSize:'$lg'}} h5 b>Add Order Note</Text>
                    <Textarea  name='order_note' placeholder='How can we help you?' css={{width:'350px',}}>

                    </Textarea>
                </Grid> */}
              <Grid className="d-grid justify-content-end">
                <Text css={{ fontSize: "x-large" }} b span>
                  SUBTOTAL:{" "}
                  <Text span>$ {SubTotalCalculator(state.cart.content)}</Text>
                </Text>
                <Spacer />
                <Text>
                  Taxes, shipping and discounts codes calculated at checkout
                </Text>

                <Text>
                  <input
                    onChange={() => setTerms(!terms)}
                    required
                    type={"checkbox"}
                  />{" "}
                  <label>I agree with the terms and conditions</label>
                </Text>
                <Button2
                  type="submit"
                  disabled={terms ? false : true}
                  fontSize="20px"
                  width="300px"
                  height="50px"
                  text="CHECK OUT"
                />
              </Grid>
            </Grid.Container>
          </form>
        </>
      ) : (
        <>
          <Grid.Container direction="column">
            <Grid className="d-flex flex-column justify-content-center">
              {/* <Image
                src={isDark ? "/svg/bag-dark.svg" : "/svg/bag-light.svg"}
                width={700}
                height={700}
                sizes={"100vw"}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt=""
                // style={{ cursor: "pointer" }}
              /> */}
              <Text b className="text-center">
                Your cart is empty
              </Text>
              <Spacer />
              <ButtonLink text="RETURN TO SHOP" href="/" />
            </Grid>
          </Grid.Container>
        </>
      )}

      <Spacer />
    </Container>
  );
}
export default Cart;
