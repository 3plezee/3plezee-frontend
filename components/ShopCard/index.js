import { Card, Grid, Spacer, Text } from "@nextui-org/react";
import Link from "next/link";
import styles from "./styles.module.css";
import { useContext } from "react";
import { motion } from "framer-motion";
import { LatestProducts } from "../../utils/data";
import { useTheme } from "next-themes";
import React from "react";
import { storeContext } from "../../components/context/Store";
import { isEqual, find } from "lodash";
import { Zoom, Shake } from "react-awesome-reveal";
import { Modal, useModal, Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { MyStyledButton } from "../Buttons/myStyledButton";

function ShopCard(params) {
  const { state, dispatch } = React.useContext(storeContext);
  const { mq, item, cardCount } = params;

  const { setVisible, bindings } = useModal();

  const ChangeCart = (e) => {
    e.preventDefault();

    // get data from form
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);

    delete form_values.slug;
    let prod = {
      name: item.name,
      price: item.price,
      slug: item.slug,
      image: item.product_image[0],
      attributes: form_values,
      quantity: 1,
    };
    dispatch({ type: "CART_ADD_ITEM", payload: prod });
  };

  // const orig = "http://127.0.0.1:8000";
  return (
    <Grid xs={mq ? 12 : cardCount ?? 3}>
      <Zoom triggerOnce cascade>
        <Card
          variant={"shadow"}
          css={{
            borderRadius: "unset",
            width: "100%",
            height: mq ? "auto" : "100%",
          }}
          isHoverable
          className={`${styles.ShopCard}`}
        >
          <div className="position-relative flex alig-items-center product-card p-2 h-100">
            <Link href={`/product/${item.slug}`}>
              <Zoom triggerOnce left>
                <Card.Image
                  css={{ maxHeight: "auto", width: "100%" }}
                  // css={{"height": mq ? "40vh":"75vh"}}
                  src={item.product_image[0]?.image}
                  //   width="100%"
                  showSkeleton
                  placeholder="/images/img1.jpg"
                  objectFit="cover"
                  alt="product"
                  maxDelay={10000}
                ></Card.Image>
              </Zoom>
            </Link>
            <div className={styles.wishlist}>
              <Image
                src={
                  find(state.wishlist.content, {
                    name: item.name,
                    slug: item.slug,
                  })
                    ? "/svg/heart-active.svg"
                    : "/svg/heart-light.svg"
                }
                width="50"
                onClick={() =>
                  dispatch({
                    type: "WISHLIST_ITEM",
                    payload: { name: item.name, slug: item.slug },
                  })
                }
                height={"50"}
                alt=""
                style={{ cursor: "pointer" }}
              />
            </div>
            {/* <form onSubmit={ChangeCart}> */}
            <div></div>
          </div>
          <Button
            className={`${styles.addToCartWrapper} d-flex align-items-center justify-content-around`}
            auto
            shadow
            color="#8e7459"
            onPress={() => setVisible(true)}
          >
            <Text color="white">Add to Cart</Text>
          </Button>

          <Card.Body css={{ overflow: "hidden", maxHeight: "200px" }}>
            <Text
              css={{ fontSize: mq ? "$xs" : "medium", margin: 0 }}
              className="d-flex justify-content-start"
            >
              <Link
                css={{
                  color: "#4d5959",
                }}
                href={`/product/${item.slug}`}
              >
                {item.name.charAt(0).toUpperCase() +
                  item.name.slice(1).toUpperCase()}
              </Link>
            </Text>
            <Text b css={{ fontSize: mq ? "$xs" : "medium" }}>
              $ {item.price}
            </Text>
          </Card.Body>
        </Card>

        {/* </Zoom> */}
      </Zoom>
      <Modal
        className={styles.modal}
        scroll
        width="400px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" h3 b>
            Quickshop
          </Text>
        </Modal.Header>
        <Modal.Body className={styles.modal_body}>
          <Grid.Container>
            <Grid xs={mq ? 4 : 5}>
              <Image
                src={item.product_image[0].image}
                width={100}
                height={100}
                alt=""
              />
            </Grid>
            <Grid className="d-grid" xs={mq ? 8 : 7}>
              <Text style={{ fontSize: "large" }}>{item.name}</Text>

              <Text style={{ fontSize: "large" }}>${item.price}</Text>
            </Grid>
          </Grid.Container>
          <Grid.Container className="d-grid">
            <form onSubmit={ChangeCart}>
              <input name="slug" type={"hidden"} value={item.slug} />
              <Grid className="gap-0" xs={"12"}>
                {/* ss */}

                <div
                  className={`${styles.moreInfoWrapper}  w-100 d-grid justify-content-center`}
                >
                  <div className=" attr-div d-grid p-1">
                    {item?.product_attribute.map((item, index) => {
                      return (
                        <React.Fragment key={index}>
                          {item.name === "color" ? (
                            <>
                              <Text
                                className="text-center"
                                style={{ fontSize: "large" }}
                                b
                                h5
                              >
                                {item.name.toLocaleUpperCase()}
                              </Text>
                              <div className="d-flex gap-1 justify-content-center">
                                {item.value.map((e, index) => {
                                  return (
                                    <input
                                      type={"radio"}
                                      name={item.name}
                                      key={index}
                                      style={{
                                        background:
                                          item.name === "color" ? `${e}` : "",
                                      }}
                                      defaultValue={e}
                                      className={
                                        index == 0
                                          ? `mx-1 main-cart-color-button main-cart-color-button-active d-flex justify-content-center align-items-center`
                                          : `mx-1 main-cart-color-button d-flex justify-content-center align-items-center`
                                      }
                                      defaultChecked={
                                        item.value[0] === e ? "checked" : ""
                                      }
                                    />
                                  );
                                })}
                              </div>
                            </>
                          ) : (
                            <>
                              <Spacer />
                              <Text
                                className="text-center"
                                style={{ fontSize: "large" }}
                                h5
                                b
                              >
                                {item.name.toLocaleUpperCase()}
                              </Text>
                              <div className="d-flex gap-0 ">
                                {item.value.map((e, index) => {
                                  return (
                                    <label key={index} className="attr-label">
                                      <input
                                        style={{ background: item.value }}
                                        type={"radio"}
                                        name={item.name}
                                        defaultValue={e}
                                        required
                                        defaultChecked={
                                          item.value[0] === e ? "checked" : ""
                                        }

                                        // {item.displayValue}
                                      />
                                      <span>
                                        {item.value[index].toLocaleUpperCase()}
                                      </span>
                                    </label>
                                  );
                                })}
                              </div>
                            </>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                  {/* <Text css={{fontSize:"small"}} span>SIZE: XL</Text>
                    <div className=' d-flex'>
                        {item?.sizes.map((item, index)=>{
                          return(
                            
                            <button key={index}  className={index == 0 ? `mx-1 main-cart-size-button main-cart-size-button-active d-flex justify-content-center align-items-center`:`mx-1 main-cart-size-button d-flex justify-content-center align-items-center`}>{item}</button>
                            
                          )
                        })}
                            
                            </div> */}
                </div>
                {/* en */}
              </Grid>

              <Grid className="d-flex justify-content-center" xs={"12"}>
                <MyStyledButton
                  type={"submit"}
                  // disabled= {params.disabled ?? false}
                  auto
                  css={{ height: "50px", width: "40%", fontSize: "auto" }}
                  size="mysize"
                  color="mycolor"
                >
                  ADD TO CART
                </MyStyledButton>
              </Grid>
            </form>
          </Grid.Container>
          <Grid></Grid>
        </Modal.Body>
        <Modal.Footer>
          <Link
            style={{ color: "#b59677" }}
            className="h5"
            href={`/product/${item.slug}`}
          >
            View full details
          </Link>
        </Modal.Footer>
      </Modal>
    </Grid>
  );
}
export default ShopCard;
