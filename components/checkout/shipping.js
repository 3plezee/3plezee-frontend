import { Card, Container, Grid, Spacer, Text } from "@nextui-org/react"
import Button2 from "../../components/Buttons/Button2"
import { LatestProducts } from "../../utils/data"
import styles from './styles.module.css'


function Shipping(){

    return(
        <Grid xs={'6'}>
        <Spacer />
          <Text h1>Shipping</Text>
        </Grid>
    )
}
export default Shipping;