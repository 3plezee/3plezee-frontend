import { Card, Container, Grid, Spacer, Text } from "@nextui-org/react"
import Button2 from "../../components/Buttons/Button2"
import CheckoutCart from "../../components/checkout/checkoutcart"
import Information from "../../components/checkout/information"
import Payment from "../../components/checkout/payment"
import { LatestProducts } from "../../utils/data"
import styles from './styles.module.css'
import { useMediaQuery } from "../../components/mediaQuery"

function CheckoutPayment(){
    const isMd = useMediaQuery(960);


    return(
        <Container css={{paddingTop:"40px", maxWidth:"1504px", margin:0}} fluid>
        <Spacer />
        <Grid.Container>
            <Grid  xs={isMd ? 12: 6}>
            <Payment />
            </Grid>
            <Grid style={{padding:"0 !important"}} css={{padding:'0px !important'}} direction="column" xs={isMd ? 12: 6}>
                <CheckoutCart />
            </Grid>
        </Grid.Container>
          
        </Container>
    )
}
export default CheckoutPayment;