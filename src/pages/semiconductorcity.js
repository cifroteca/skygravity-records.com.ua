import * as React from "react"
import { Link } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { Container } from "react-bootstrap";



const semiconductorcityPage = () => (
  <Layout>           
           <p className={styles.nameRelease}>SEMICONDUCTOR CITY</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>               
           <iframe className={styles.framebandcamp} title="Bancamp music Skygravity records Mystagogue" src="https://bandcamp.com/EmbeddedPlayer/album=190453722/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="https://skygravityrecords.bandcamp.com/album/semiconductor-city-24-bit">Semiconductor city [24 bit] by Skygravity records</a></iframe>
        </Container>         
         </div>
         <div className={styles.sidebar}>

         <StaticImage
         placeholder="blurred"
         src="../images/semiconductorcity.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '0px'}}
         />  <br/>
          <p className={styles.descriptionTxt}>
            A city of electromagnetic vortices and electronic flows,
            city in which everything is controlled by a symbiosis of machines and people.<br/>
            We present to your attention the original music from the electronic cities!

          </p>
          <br/><br/>
          Compiled by Cifroteca<br/>
          Mastered by Overdream<br/>
          Cover by Artrama  <br/>
          Release date: 20 december 2020
                    </div> 
              </div> 
 

    <div className={styles.textCenter}>
    <Link to="/releases/">Go back</Link>
    </div>

   
  </Layout>
)

export const Head = () => <Seo title="Skygravity" />

export default semiconductorcityPage



 
  
