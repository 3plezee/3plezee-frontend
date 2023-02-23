import {
  Card,
  Container,
  Grid,
  Spacer,
  Text,
  Textarea,
} from "@nextui-org/react";
import { useMediaQuery } from "../../components/mediaQuery";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import { LatestProducts } from "../../utils/data";
import React from "react";
import ShopCard from "../../components/ShopCard";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useTheme } from "@nextui-org/react";
import { MyStyledButton } from "../../components/Buttons/myStyledButton";
import { storeContext } from "../../components/context/Store";
import { find, sum } from "lodash";
import ReactStars from "react-rating-stars-component";
import { Slide } from "react-awesome-reveal";
import Button2 from "../../components/Buttons/Button2";
import { useSession, signIn, signOut } from "next-auth/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductDetails() {
  const { data: session } = useSession();
  const [mainImageIndex, setMainImageIndex] = useState(undefined);
  const isMd = useMediaQuery(960);
  const router = useRouter();
  const { isDark, type } = useTheme();
  const [data, setData] = useState(undefined);
  const { slug } = router.query;
  const { state, dispatch } = useContext(storeContext);
  const [rating, setRating] = useState(0);
  const [mainRating, setMainRating] = useState(0);
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  // const product = LatestProducts.find(el=> el.slug === slug)
  useEffect(() => {
    ImageHandler(0);
  }, [slug]);
  const ChangeCart = (e) => {
    e.preventDefault();
    // get data from form
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);

    let prod = {
      name: product.name,
      price: product.price,
      slug: product.slug,
      image: product.product_image[0],
      attributes: form_values,
      quantity: 1,
    };

    dispatch({ type: "CART_ADD_ITEM", payload: prod });
  };

  const ImageHandler = (imageIndex) => {
    setMainImageIndex(imageIndex);
  };

  const submitReview = async (data) => {
    let res = await fetch("/api/rating/", {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${session?.accessToken}`,
      }),
      body: JSON.stringify(data),
    });

    let response = await res.json();
    if (res.ok) {
      toast.success("Thank you for contributing", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDark ? "dark" : "light",
      });

      getProduct();
    } else {
      toast.error("Failed to add review", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDark ? "dark" : "light",
      });
    }
  };

  const addReview = (e) => {
    e.preventDefault();
    if (!session) {
      toast(" User must be logged in to leave review", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDark ? "dark" : "light",
      });
    } else {
      var Data = new FormData(e.target);

      const form_values = Object.fromEntries(Data);

      submitReview(form_values);
    }
    // e.target.reset()
  };

  const getProduct = async () => {
    let res = await fetch(`/api/products/${slug}`, {
      method: "GET",
    });
    let response = await res.json();
    if (res.ok) {
      setData(response.data);
      getAvgRating(response.data.product.product_ratings);
    } else {
      // toast(' Failed to get category', {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: isDark ? "dark":"light",
      //   });
    }
  };

  const getAvgRating = (params) => {
    const rating = params.map((e) => e.rating);
    if (rating.length > 0) {
      let y = sum(rating) / params.length;
      setMainRating(parseFloat(y.toFixed(1)));
    }
  };

  useEffect(() => {
    getProduct();
  }, [slug]);
  const product = data?.product;
  // const orig = "http://127.0.0.1:8000";

  return (
    <>
      <Container
        css={{
          paddingTop: "40px",
          maxWidth: "1504px",
          display: "flex",
          justifyContent: "center",
        }}
        fluid
      >
        <Grid.Container>
          <form onSubmit={ChangeCart}>
            <Grid.Container>
              <Grid
                className={
                  isMd
                    ? `d-flex ${styles.scrollbar}`
                    : `d-grid ${styles.scrollbar}`
                }
                css={{
                  gap: "10px",
                  maxHeight: isMd ? "100px" : "500px",
                  overflowY: isMd ? "" : "scroll",
                  overflowX: isMd ? "scroll" : "",
                  order: isMd ? 1 : 0,
                }}
                xs={isMd ? 12 : 2}
              >
                <Grid
                  xs={isMd ? 12 : ""}
                  className={`${styles.carouselImagesWrapper}`}
                >
                  {product?.product_image?.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <Card
                          isHoverable
                          isPressable
                          key={index}
                          variant="fiat"
                          css={{ borderRadius: "0", marginBottom: "$5" }}
                        >
                          <Card.Image
                            onClick={() => ImageHandler(index)}
                            src={item.image}
                            css={{ height: isMd ? "90px" : "auto" }}
                            showSkeleton
                            placeholder="/images/img1.jpg"
                            objectFit="cover"
                            alt={product?.name}
                            maxDelay={10000}
                          ></Card.Image>
                        </Card>
                      </React.Fragment>
                    );
                  })}
                </Grid>
              </Grid>
              <Spacer />
              <Grid css={{ order: isMd ? 0 : 1 }} xs={isMd ? 12 : 6}>
                <Card
                  variant="fiat"
                  css={{ borderRadius: "0", marginBottom: "$5" }}
                >
                  <Card.Image
                    src={product?.product_image[mainImageIndex].image}
                    showSkeleton
                    placeholder="/images/img1.jpg"
                    objectFit="cover"
                    alt={product?.name}
                    maxDelay={10000}
                  ></Card.Image>
                </Card>
              </Grid>
              <Grid
                direction="column"
                css={{
                  paddingLeft: isMd ? "" : "30px",
                  order: isMd ? 2 : 2,
                  paddingTop: isMd ? "20px" : "",
                }}
                xs={isMd ? 12 : 3}
              >
                <Slide right triggerOnce>
                  <Text b css={{ fontSize: "18px", color: "$primaryLight" }} h1>
                    {product?.name}
                  </Text>
                  <Text b css={{ fontSize: "18px", color: "$primaryLight" }} h1>
                    ${product?.price}
                  </Text>
                  <Spacer />
                  {mainRating > 0 && (
                    <ReactStars
                      count={5}
                      // onChange={ratingChanged}
                      size={30}
                      value={mainRating}
                      edit={false}
                      isHalf={true}
                      activeColor="#b59677"
                    />
                  )}
                  ,<Text>{product?.description}</Text>
                  <div className=" attr-div d-grid">
                    {product?.product_attribute.map((item, index) => {
                      return (
                        <React.Fragment key={index}>
                          {item.name === "color" ? (
                            <>
                              <Text>{item.name.toLocaleUpperCase()}</Text>
                              <div className="d-flex gap-2">
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
                              <Text className="mt-1">
                                {item.name.toUpperCase()}
                              </Text>
                              <div className="d-flex gap-2">
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
                                      <span>{e}</span>
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
                  <Spacer />
                  <Spacer />
                  <Grid className="d-flex mx-2 align-items-center gap-2">
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

                    <div
                      className={`${styles.wishList} p-2`}
                      onClick={() =>
                        dispatch({
                          type: "WISHLIST_ITEM",
                          payload: {
                            name: product?.name,
                            slug: product?.slug,
                          },
                        })
                      }
                    >
                      <Image
                        src={
                          find(state.wishlist.content, {
                            name: product?.name,
                            slug: product?.slug,
                          })
                            ? "/svg/heart-active.svg"
                            : "/svg/heart-light.svg"
                        }
                        width="50"
                        height={"50"}
                        alt=""
                      />
                    </div>
                  </Grid>
                  <Spacer />
                  {/* <Grid className="d-flex gap-3" direction="row">
                    <Text size={isMd ? "$sm" : "$md"}>Size Guide</Text>
                    <Text size={isMd ? "$sm" : "$md"}>Delivery and return</Text>
                    <Text size={isMd ? "$sm" : "$md"}>Ask a question</Text>
                    <Spacer />
                  </Grid> */}
                  <Grid direction="row">
                    {/* <Text>SKU : 001</Text> */}
                    <Text>Categories : {product?.category.name}</Text>
                  </Grid>
                </Slide>
              </Grid>
            </Grid.Container>
          </form>
          <Spacer />
          <Spacer />
          <Grid className="w-100">
            <Text h3 className="text-center " b>
              REVIEWS
            </Text>
            <Spacer />
            <Grid.Container
              css={{ display: "flex", justifyContent: "center" }}
              gap={2}
            >
              <Grid
                xs={isMd ? 12 : 3}
                css={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Text
                  className="m-0 p-0 text-center"
                  css={{ fontSize: "x-large" }}
                >
                  {mainRating}
                </Text>
                <div className="d-flex justify-content-center">
                  {mainRating > 0 && (
                    <ReactStars
                      count={5}
                      // onChange={ratingChanged}
                      size={30}
                      value={mainRating}
                      edit={false}
                      isHalf={true}
                      activeColor="#b59677"
                    />
                  )}
                </div>
                <Text className="m-0 p-0 text-center">
                  {product?.product_ratings.length} review(s)
                </Text>
                <div className="d-flex justify-content-center"></div>
              </Grid>

              <Grid xs={isMd ? 12 : 3}>
                <form onSubmit={addReview}>
                  <input
                    type={"hidden"}
                    defaultValue={product?.id}
                    name="product"
                  />
                  <input
                    type={"hidden"}
                    defaultValue={rating ?? 0}
                    name="rating"
                  />
                  <input
                    type={"hidden"}
                    defaultValue={session?.user.name ?? "anonymous"}
                    name="name"
                  />
                  <Textarea
                    name="message"
                    placeholder="How awesome is our product ?"
                    css={{ width: isMd ? "270px" : "350px" }}
                  ></Textarea>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={30}
                    isHalf
                    activeColor="#b59677"
                  />

                  <MyStyledButton
                    type={"submit"}
                    // disabled= {params.disabled ?? false}
                    auto
                    css={{ height: "40px", width: "40%", fontSize: "medium" }}
                    size="mysize"
                    color="mycolor"
                  >
                    Add Review
                  </MyStyledButton>
                </form>
              </Grid>
            </Grid.Container>
            <Spacer />
            {product?.product_ratings?.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <Grid.Container>
                    <Grid
                      css={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        background: "#b59677",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "White",
                      }}
                    >
                      A
                    </Grid>
                    <Grid css={{ paddingLeft: "10px" }}>
                      <Text>{item.name}</Text>
                    </Grid>
                  </Grid.Container>

                  <Grid.Container direction="column">
                    <ReactStars
                      count={5}
                      // onChange={ratingChanged}
                      size={25}
                      value={item.rating}
                      isHalf
                      activeColor="#b59677"
                    />
                    <Text>{item.message}</Text>
                  </Grid.Container>
                </React.Fragment>
              );
            })}
          </Grid>
          <Spacer />
          <Grid className="w-100">
            {data?.similar_products.length > 0 ? (
              <>
                <Text h3 className="text-center " b>
                  YOU MAY ALSO LIKE
                </Text>
                <Spacer />
                <Grid.Container gap={2}>
                  {data?.similar_products?.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <ShopCard mq={isMd} item={item} cardCount={3} />
                      </React.Fragment>
                    );
                  })}
                </Grid.Container>
              </>
            ) : (
              ""
            )}
          </Grid>

          <Spacer />
          <Grid className="w-100">
            {/* <Text h3 className="text-center " b>
              RECENTLY VIEWED PRODUCTS
            </Text> */}
            <Spacer />
            <Grid.Container gap={2}>
              {LatestProducts.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    {/* <ShopCard mq={isMd} item={item} cardCount={3} /> */}
                  </React.Fragment>
                );
              })}
            </Grid.Container>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
}
export default ProductDetails;
