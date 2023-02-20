import { Grid, Spacer, Text, Collapse, useTheme, Input } from "@nextui-org/react";
import { useMediaQuery } from "../mediaQuery";
import React from 'react'

import Link from "next/link";
import Image from "next/image";
import Button1 from "../Buttons/Button1";
import { Categoryitems } from "../../utils/data";
import CapitalizeFirstCharacter from "../textComponent/capitalizeFirstCharacter";

function Footer(params) {
    const { theme, isDark } = useTheme();
    const isMd = useMediaQuery(960);
    
    const Information =[
        {title:'About us', link:'/'},
        {title:'Contact us', link:'/'},
        {title:'Terms & Conditions', link:'/'},
        {title:'Shipping & Delivery', link:'/'},
        {title:'Return & Exchange', link:'/'},
        {title:'Privacy Policy', link:'/'},
    ]
    const UsefullLinks = [
        {title:'Store Location', link:'/'},
        {title:'Latest News', link:'/'},
        {title:'My Account', link:'/'},
        {title:'Size Guide', link:'/'},
        {title:'FAQs', link:'/'},
    ]

    return(
        <footer>
        
        <Grid.Container css={{background:"#222222", paddingTop:"40px", paddingBottom:"10px", paddingLeft:'20px', paddingRight:'20px'}}>
            {isMd ? 
            
            <Grid>
        <Collapse.Group  css={{"background":"#222222", width:"90vw"}}>
          <Collapse  css={{"color":"White",fontSize:"$sm"}} color="white"  title="GET IN CONTACT">
          <div>
                <Text css={{letterSpacing:'10px'}}  h2 color="white">
                        3PLEZEE
                    </Text>
                    <div className="d-flex gap-2 align-item-end">
                        <div >
                    <Image
                        src='/svg/map-light.svg'
                        width='20'
                        alt=''
                        height={'50'}
                      /></div>
                      <Text  color="white">
                    184 Main Rd E, St Albans<br/>
                    VIC 3021, Australia</Text>
                    </div>
                    
                    <Spacer />
                    <div className="d-flex gap-2 align-item-center">
                        <div >
                    <Image
                        src='/svg/email-light.svg'
                        width='20'
                        alt=''
                        height={'20'}
                      /></div>
                      <Text color="white"> contact@company.com</Text>
                    </div>
                    
                    <Spacer />
                    <div className="d-flex gap-2 align-item-end">
                        <div >
                    <Image
                        src='/svg/phone-light.svg'
                        width='20'
                        alt=''
                        height={'20'}
                      /></div>
                      <Text color="white">+001 2233 456</Text>
                    </div>
                    
                    

                </div>
          </Collapse>
          <Collapse css={{"color":"White",fontSize:"$sm"}} title="CATEGORIES">
          <div>
                    
                    <Spacer />
                    <Text  color="white" >
                        {Categoryitems.map((item, index)=>{
                        return(
                            <React.Fragment key={index}>
                                
                                <Link href={`/category/${item.name}`}>{item.name}</Link>
                                <Spacer />
                            </React.Fragment>
                        )}
                        )}
                        
                    </Text>

                </div>
          </Collapse>
          <Collapse title="INFORMATION">
          <div>
                    {/* <Text  color="white" h3>
                    CATEGORIES
                    </Text> */}
                    <Spacer />
                    <Text  color="white" >
                        {Information.map((item, index)=>{
                        return(
                            <React.Fragment key={index}>
                                <Link href={`${item.link}`}>{item.title}</Link>
                                <Spacer />
                            </React.Fragment>
                        )}
                        )}
                        
                    </Text>

                </div>
          </Collapse>
          <Collapse title="USEFULL LINKS">
          <div>
                   
                    <Spacer />
                    <Text  color="white" >
                        {UsefullLinks.map((item, index)=>{
                        return(
                            <React.Fragment key={index}>
                                <Link href={`${item.link}`}>{item.title}</Link>
                                <Spacer />
                            </React.Fragment>
                        )}
                        )}
                        
                    </Text>

                </div>
          </Collapse>
          <Collapse title="NEWSLETTER SIGNUP">
          <div>
                   
                    <Spacer />
                    <Grid>
          <Input
            clearable
            // css={{height:'90px'}}
            height='100px'
            contentRightStyling={false}
            placeholder="Enter email..."
            contentRight={
            //   <SendButton>
            //     <SendIcon />
            //   </SendButton>
            <Button1 text='Subscribe' />
            }
          />
        </Grid>

                </div>
          </Collapse>
          
        </Collapse.Group>
      </Grid>
            
            :<>
            <Grid css={{"padding":"10px"}} xs={isMd ? 6:3}>
                <div>
                <Text css={{letterSpacing:'10px'}}  h2 color="white">
                        3PLEZEE
                    </Text>
                    <div className="d-flex gap-2 align-item-end">
                        <div >
                    <Image
                        src='/svg/map-light.svg'
                        width='20'
                        alt=''
                        height={'50'}
                      /></div>
                      <Text  color="white">
                    184 Main Rd E, St Albans<br/>
                    VIC 3021, Australia</Text>
                    </div>
                    
                    <Spacer />
                    <div className="d-flex gap-2 align-item-center">
                        <div >
                    <Image
                        src='/svg/email-light.svg'
                        width='20'
                        alt=''
                        height={'20'}
                      /></div>
                      <Text color="white"> contact@company.com</Text>
                    </div>
                    
                    <Spacer />
                    <div className="d-flex gap-2 align-item-end">
                        <div >
                    <Image
                        src='/svg/phone-light.svg'
                        width='20'
                        alt=''
                        height={'20'}
                      /></div>
                      <Text color="white">+001 2233 456</Text>
                    </div>
                    
                    

                </div>
                
            </Grid>
            <Grid css={{"padding":"10px"}} xs={isMd ? 6:2}>
                <div>
                    <Text  color="white" h3>
                    CATEGORIES
                    </Text>
                    <Spacer />
                    <Text  color="white" >
                        {Categoryitems.map((item, index)=>{
                        return(
                            <React.Fragment key={index}>
                                <Link href={`/category/${item.name}`}>{CapitalizeFirstCharacter(item.name)}</Link>
                                <Spacer />
                            </React.Fragment>
                        )}
                        )}
                        
                    </Text>

                </div>
                
            </Grid>
            <Grid css={{"padding":"10px"}} xs={isMd ? 6:2}>
                <div>
                    <Text  color="white" h3>
                    INFORMATION
                    </Text>
                    <Spacer />
                    <Text  color="white" >
                        {Information.map((item, index)=>{
                        return(
                            <React.Fragment key={index}>
                                <Link href={`${item.link}`}>{item.title}</Link>
                                <Spacer />
                            </React.Fragment>
                        )}
                        )}
                        
                    </Text>

                </div>
                
            </Grid>
            <Grid css={{"padding":"10px"}} xs={isMd ? 6:2}>
                <div>
                    <Text color="white" h3>
                    USEFULL LINKS
                    </Text>
                    <Spacer />
                    <Text  color="white" >
                        {UsefullLinks.map((item, index)=>{
                        return(
                            <React.Fragment key={index}>
                                <Link href={`${item.link}`}>{item.title}</Link>
                                <Spacer />
                            </React.Fragment>
                        )}
                        )}
                        
                    </Text>

                </div>
                
            </Grid>
            <Grid css={{"padding":"10px"}} xs={isMd ? 6:3}>
                <div>
                    <Text  color="white" h3>
                    NEWSLETTER SIGNUP
                    </Text>
                    <Spacer />
                    <Grid>
          <Input
            clearable
            // css={{height:'90px'}}
            height='100px'
            contentRightStyling={false}
            placeholder="Enter email..."
            contentRight={
            //   <SendButton>
            //     <SendIcon />
            //   </SendButton>
            <Button1 text='Subscribe' />
            }
          />
        </Grid>

                </div>
                
            </Grid>
            </>
             
            
            
            }
        </Grid.Container>
        <hr />
        <Grid.Container css={{background: "#222222"}} >
            <Grid css={{padding:"1%", marginBottom: isMd ? "50px": 0}}>
                <Text css={{textAlign:"center", color:'White'}} >
            Copyright © 2022 3plezee  all rights reserved. Powered by @devmaesters
            </Text>
            </Grid>
            
            
            
        </Grid.Container>
        
        
        
        
        
        
        </footer>
    )
}
export default Footer;