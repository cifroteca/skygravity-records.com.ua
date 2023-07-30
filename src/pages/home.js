import * as React from "react";
import { Link  } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";
import MultyCarouselBox from "../components/MultyCarouselBox";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => (   
  
    <Layout >
     
   {/* <Button> Click </Button> */}
   
    <p className={styles.nameRelease}>Skygravity records</p>  
   {/*  background: `url(${Background})` */}
    
{/* 
     <Link to="/"> 
    <StaticImage
         placeholder="blurred"
         src="../images/plur.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '0px'}}
         />
         </Link> */}

         <MultyCarouselBox/>  
        {/*  <CarouselBox/>  */}

     <div className={styles.textCenter}>    
    <Link to="/">Go back </Link>
    </div>

  
 
  </Layout>
)

export const Head = () => <Seo title="Home Page" />

export default HomePage
