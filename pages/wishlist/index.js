import Head from 'next/head'
import { useTheme, Text, Grid, Spacer, Card, Col, Row,Button,  Container} from '@nextui-org/react';
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'
import { useMediaQuery } from '../../components/mediaQuery';
import ShopCard from '../../components/ShopCard';
import React, {useContext} from 'react'
import Button1 from '../../components/Buttons/Button1';
import { faCartShopping, faShoppingBag, faHeart, faHeartbeat, faHeartCirclePlus, faSearch, faStore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LatestProducts } from '../../utils/data';
import { storeContext } from '../../components/context/Store';
import { find } from 'lodash';
import styles from './styles.module.css'
import {Image} from '@nextui-org/react';

function WishList(){
    const isMd = useMediaQuery(960);
  const { theme } = useTheme();
  const {state, dispatch} = useContext(storeContext);
    const data = LatestProducts.filter((e)=> find(state.wishlist.content ,{name:e.name, slug:e.slug}))

    return(
        <>
        <div className="">
                <div  className={styles.overlay}>
                <Text color='white'  h2>{'WISHLIST'}</Text>
                </div>
                <div>
            <Image style={{height:'200px', width:'100vw', }}
            src={'/images/category-banner.jpg'}
            objectFit='cover'
            
            alt=""
            />
            
            </div>
            </div>
            <Spacer />
        <Grid className='d-flex align-items-center justify-content-center' css={{height:"100px", width:"100%", background:"transparent"}}>
            <Text css={{textAlign:"center", marginTop:"$5"}}  h2>View Your Wishlist Products</Text>
        </Grid>

        <Container css={{paddingTop:"0px", maxWidth:"1504px", margin:0}} fluid >
        <Grid.Container  gap={1} >
            {data?.map((item, index)=>{
              return(
                <React.Fragment key={index}>
                  <ShopCard mq={isMd} item={item} cardCount={3} />
                </React.Fragment>
              )
            })}

          </Grid.Container>
        </Container>
        <Spacer />
        </>
    )
}
export default WishList;