import * as React from "react"
import { Link } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { Container } from "react-bootstrap";



const psychotronicPage = () => (
  <Layout>          
           <p className={styles.nameRelease} >PSYCHOTRONIC</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>      
           <iframe className={styles.framebandcamp} title="Bancamp music Skygravity records Psychotronic" src="https://bandcamp.com/EmbeddedPlayer/album=3223213900/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="https://skygravityrecords.bandcamp.com/album/psychotronic">Psychotronic by Skygravity records</a></iframe>
        </Container>         
         </div>
         <div className={styles.sidebar}>

         <StaticImage
         placeholder="blurred"
         src="../images/psychotronic.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="Psychotronic"
         style={{margin: '0px'}}
         />  <br/>
          <p className={styles.descriptionTxt}>
          After a creative vacation and growing up, Sky Gravity records returns to its listeners 
          and just to all those people who love the psychedelic trance! Skygravity Records 
          is the first Ukrainian record label specializing in psychedelic trance music. 
          The name of the label comes from the name of the Skygravity festival which 
          took place in 2005 in the Ukraine, Crimea and united all Ukrainian psytrance promo groups. 
          The first Skygravity compilation was the first compilation of Ukrainian 
          musicians in a psychedelic trance scene in 2006. 
          Skygravity Records is proud to present 6th Psychedelic trance release 
          titled «Psychotronic» by variable artists - Have a nice trip!


</p>
<br/><br/>
Compiled by Cifroteca<br/>
Mastered by TRK Mastering<br/>
Cover by Salamandra Artworks  <br/>
Release date: 17 November 2019
          </div> 
     </div> 
 

<div className={styles.textCenter}>
<Link to="/releases/">Go back</Link>
</div>

  

   
  </Layout>
)

export const Head = () => <Seo title="Skygravity" />

export default psychotronicPage



 
  
