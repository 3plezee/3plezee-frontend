import { Card, Container, Grid, Spacer, Text, Image } from "@nextui-org/react";
import { useMediaQuery } from "../../components/mediaQuery";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import { LatestProducts } from "../../utils/data";
import React from "react";
import ShopCard from "../../components/ShopCard";
import { useState, useEffect, useContext } from "react";
import { useTheme } from "@nextui-org/react";
import { MyStyledButton } from "../../components/Buttons/myStyledButton";
import { storeContext } from "../../components/context/Store";
import Button2 from "../../components/Buttons/Button2";

function Category() {
  const router = useRouter();
  const isMd = useMediaQuery(960);
  const { slug } = router.query;
  const [data, setData] = useState(undefined);

  const getCategory = async () => {
    let res = await fetch(`/api/categories/${slug}`, {
      method: "GET",
    });
    let response = await res.json();
    if (res.ok) {
      setData(response.data);
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
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <div className="">
        <div className={styles.overlay}>
          <Text color="white" h2>
            {slug?.toLocaleUpperCase()}
          </Text>
        </div>
        <div>
          <Image
            style={{ height: "200px", width: "100vw" }}
            src={"/images/category-banner.jpg"}
            objectFit="cover"
            alt=""
          />
        </div>
      </div>
      <Spacer />

      <Container
        css={{
          paddingTop: "40px",
          maxWidth: "1504px",
          display: "flex",
          justifyContent: "center",
        }}
        fluid
      >
        {data?.products.length > 0 ? (
          <Grid.Container gap={1}>
            {data?.products?.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <ShopCard mq={isMd} item={item} cardCount={3} />
                </React.Fragment>
              );
            })}
          </Grid.Container>
        ) : (
          <Grid.Container>
            <Text className="text-center w-100">
              No products under this category
            </Text>
          </Grid.Container>
        )}
      </Container>

      <Spacer />
      {/* <div className='d-flex justify-content-center'>
          <Button2 text={"Load more"} />
          </div> */}
      <Spacer />
    </>
  );
}
export default Category;
