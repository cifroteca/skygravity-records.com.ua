import * as React from "react"
import { Link } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { Container } from "react-bootstrap";

const encodedtracesPage = () => (
  <Layout>
           <p className={styles.nameRelease}>ENCODED TRACES</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>                                     
           <iframe className={styles.framebandcamp} title="Bancamp music Skygravity records Encoded Traces" src="https://bandcamp.com/EmbeddedPlayer/album=3658840931/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="https://skygravityrecords.bandcamp.com/album/encoded-traces-24-bit">Encoded Traces [24 bit] by Skygravity records</a></iframe>
        </Container>         
         </div>
         <div className={styles.sidebar}>

         <StaticImage
         placeholder="blurred"
         src="../images/encodedtraces.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '0px'}}
         />  <br/>
          <p className={styles.descriptionTxt}>
          An infinite amount of information flies past us and only part of it we can see in encoded signals.
        
          </p>
          <br/><br/>
          Compiled by Cifroteca<br/>
          Mastered by Seres Studio<br/>
          Cover by Artrama  <br/>
          Release date: 12 July 2021
                    </div> 
              </div> 
 

    <div className={styles.textCenter}>
    <Link to="/releases/">Go back</Link>
    </div>

   
  </Layout>
)

export const Head = () => <Seo title="Skygravity" />

export default encodedtracesPage



 
  
