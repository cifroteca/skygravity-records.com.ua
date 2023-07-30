import * as React from "react"
import { Link } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import soundcloudlong from '../images/logo/soundcloud_long.png'
import spotifylong from '../images/logo/spotify_long.png'
import instagramlong from '../images/logo/instagram_long.png'
import facebooklong from '../images/logo/facebook_long.png'


import { Container } from "react-bootstrap";



const tookytooky_bioPage = () => (
  <Layout>
       
     <p className={styles.nameRelease}>Tookytooky</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>        
              <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Cifroteca" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1507220932&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>                              
              <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Cifroteca" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/699489793&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe> 
          </Container>         
        
         </div>
         <div className={styles.sidebarbio}>

         <StaticImage
         placeholder="blurred"
         src="../images/artists/tookytooky.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="Tookytooky"
         style={{margin: '0px'}}
         />  <br/>

           <Link to="https://soundcloud.com/tookytooky" >
              <img className={styles.artistpiclink} src={soundcloudlong} alt="Sound Cloud Tookytooky"/> 
            </Link>
            <Link to="https://open.spotify.com/artist/4TISmAdGE1x4QZqu537srg" >
              <img className={styles.artistpiclink} src={spotifylong} alt="Spotify Tookytooky"/> 
            </Link> 
            <Link to="https://www.instagram.com/tookytooky.adm/" >
              <img className={styles.artistpiclink} src={instagramlong} alt="Instagram Tookytooky"/> 
            </Link> 
            <Link to="https://www.facebook.com/tookytooky" >
              <img className={styles.artistpiclink} src={facebooklong} alt="Facebook Tookytooky"/> 
            </Link> 
            
          
          <p className={styles.descriptionTxt}>
          Tookytooky is a solo psy trance project, 
          founded by Ukrainian musician Sergey Verbytskiy. 
          In 2007 he started production music and learning sound engineering, 
          parallel testing all of this at various parties and festivals.

          Now Tookytooky has own style of sound. This is a pure psychedelic 
          trance with colorful emotions, blasting rhythm, twisted and mind-blowing sound effects. 
            <br/><br/>
          </p>
                   </div> 
              </div> 
 

    <div className={styles.textCenter}>
    <Link to="/artists/">Go back</Link>
    </div>

   
  </Layout>
)

export const Head = () => <Seo title="Tookytooky Bio" />

export default tookytooky_bioPage



 
  
