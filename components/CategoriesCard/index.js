import { Card, Grid, Col, Text, Image } from "@nextui-org/react";
import Link from "next/link";
import { Zoom } from "react-awesome-reveal";

function CategoryCard(params) {
  const { mq, item } = params;

  return (
    <>
      <Grid xs={mq ? 12 : 6} >
        <Link href={`/category/${item.slug.toLocaleLowerCase()}`}>
          <Zoom left triggerOnce cascade>
            <Card
              css={{ width: "100%", maxHeight: '70vh' }}
              variant="flat"
              isPressable
              isHoverable
              className="w-full "
            >
              <Card.Header css={{ position: "absolute", zIndex: 2, top: 5, left: 5, maxWidth: '35%', background: '$backgroundAlpha' }}>
                <Col css={{ height: "100%" }}>
                  <Text b transform="uppercase" h3 color="black">
                    {item.name}
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
