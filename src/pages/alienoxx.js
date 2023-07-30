import * as React from "react"
import { Link } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import soundcloudlong from '../images/logo/soundcloud_long.png'

import mixcloud from '../images/logo/mixcloud.png'
import facebooklong from '../images/logo/facebook_long.png'


import { Container } from "react-bootstrap";



const alienoxxPage = () => (
  <Layout>
       
     <p className={styles.nameRelease}>Alienoxx</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>                                      
             <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Alienoxx1" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1017311254&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
             
             <iframe width="100%" height="120" title="Sound Cloud music Skygravity records Alienoxx2" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Falienoxx%2Fpsypsypsy-mix-vol1%2F" frameborder="0" ></iframe>
             
          </Container>         
        
         </div>
         <div className={styles.sidebarbio}>

         <StaticImage
         placeholder="blurred"
         src="../images/artists/alienoxx.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '0px'}}
         />  <br/>

           <Link to="https://soundcloud.com/alienoxx" >
              <img className={styles.artistpiclink} src={soundcloudlong} alt="Sound Cloud Cifroteca"/> 
            </Link>
            <Link to="https://www.mixcloud.com/alienoxx">
              <img className={styles.artistpiclink} src={mixcloud} alt="Spotify Cifroteca"/> 
            </Link> 
          
            <Link to="https://www.facebook.com/alienoxx" >
              <img className={styles.artistpiclink} src={facebooklong} alt="Facebook Cifroteca"/> 
            </Link> 
            
          
          <p className={styles.descriptionTxt}>
           Alenoxx is Andrey's project, Andrey is the official DJ of Skagravity Records, 
           Andrey helps in creating compilations and selecting artists and music, 
           he prefers to play music in different styles<br/>
            - psy trance / psy prog / darkpsy<br/>
            - psy chill / chillgressive<br/>
            - neurofunk/darkside dnb<br/>
            - hardcore / crossbreed / speedcore<br/>
            - deep house / tech house     <br/>
              Kyiv, Ukraine 
            <br/><br/>
          </p>
                   </div> 
              </div> 
 

    <div className={styles.textCenter}>
    <Link to="/artists/">Go back</Link>
    </div>

   
  </Layout>
)

export const Head = () => <Seo title="Ablepsy" />

export default alienoxxPage



 
  
