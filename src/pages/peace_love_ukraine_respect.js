import * as React from "react"
import { Link } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { Container } from "react-bootstrap";



const plurPage = () => (
  <Layout>           
           <p className={styles.nameRelease}>Peace Love Ukraine Respect</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>                                                                      
           <iframe className={styles.framebandcamp} title="Bancamp music Skygravity records - Peace Love Ukraine Respect" src="https://bandcamp.com/EmbeddedPlayer/album=213469387/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="https://skygravityrecords.bandcamp.com/album/peace-love-ukraine-respect">Peace Love Ukraine Respect by Skygravity records</a></iframe>
        </Container>         
         </div>
         <div className={styles.sidebar}>

         <StaticImage
         placeholder="blurred"
         src="../images/plur.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '0px'}}
         />  <br/>
          <p className={styles.descriptionTxt}>
           У цій збірці об'єднані найкращі Українські продюсери та музиканти психоделічної електронної сцени.

          Збірка буде доступна для прослуховування на всіх платформах і безкоштовна для завантаження з bandcamp - Skygravity records, де можна буде залишити донат на будь-яку суму, всі зібрані кошти підуть у фонд United24 на розмінування території наших лісів.<br/><br/>

          The best Ukrainian producers and musicians of psychedelic electronic music were involved in the compilation tracklist.
          <br/>
          VA PLUR [Peace Love Ukraine Respect] will be able to listen on all known platforms and free for downloading on Skygravity Records Bandcamp.<br/>

          VA PLUR [Peace Love Ukraine Respect] will be available without charged pricing, instead of spending for purchasing, you can leave a donation of any amount for the funds' collection platform "United24", the Ukrainian official government's foundation to support fighting for Freedom and Peace and Demining our forests."
          <br/>
          Support Ukraine: www.u24.gov.ua        

          </p>
          <br/><br/>
          Compiled by Dj Jet / Cifroteca<br/>
          Mastered by Andi Vax<br/>
          Cover by Salamandra Artworks  <br/>
          Release date: 12 May 2023
                    </div> 
              </div> 
 

    <div className={styles.textCenter}>
    <Link to="/releases/">Go back</Link>
    </div>

   
  </Layout>
)

export const Head = () => <Seo title="Skygravity" />

export default plurPage



 
  
