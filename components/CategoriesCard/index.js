import { Card, Grid, Col, Text, Image } from "@nextui-org/react";
import Link from "next/link";
import { Zoom } from "react-awesome-reveal";

function CategoryCard(params) {
  const { mq, item } = params;

  return (
    <>
      <Grid xs={mq ? 12 : 3}>
        <Link href={`/category/${item.slug.toLocaleLowerCase()}`}>
          <Zoom left triggerOnce cascade>
            <Card
              css={{ height: "250px" }}
              variant="flat"
              isPressable
              isHoverable
            >
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Text transform="uppercase" h3 color="black">
                    {item.name}
                  </Text>
                  <Text size={15} color="#4d5959">
                    <i>Shop now </i>
                  </Text>
                </Col>
              </Card.Header>
              <Card.Image
                src={item.image}
                width="100%"
                height="100%"
                objectFit="cover"
                alt="Card example background"
                showSkeleton
                maxDelay={10000}
              ></Card.Image>
            </Card>
          </Zoom>
        </Link>
      </Grid>
    </>
  );
}
export default CategoryCard;
