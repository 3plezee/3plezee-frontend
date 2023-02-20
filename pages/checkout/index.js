import { Card, Container, Grid, Spacer, Text } from "@nextui-org/react"
import Button2 from "../../components/Buttons/Button2"
import CheckoutCart from "../../components/checkout/checkoutcart"
import Information from "../../components/checkout/information"
import { LatestProducts } from "../../utils/data"
import styles from './styles.module.css'


function Checkout(){

    return(
        <Container css={{paddingTop:"40px", maxWidth:"1504px", margin:0}} fluid>
        <Spacer />
        <Grid.Container>
            <Grid xs={'6'}>
            <Information />
            </Grid>
            <Grid direction="column" xs={'6'}>
                <CheckoutCart />
            </Grid>
        </Grid.Container>
          
        </Container>
    )
}
export default Checkout;