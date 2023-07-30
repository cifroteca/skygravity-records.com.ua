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


const irukanji_bioPage = () => (
  <Layout>
       
     <p className={styles.nameRelease}>Irukanji</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>    
        <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Irukanji1" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1513199032&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>                                  
        <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Irukanji2" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1566044470&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe> 
          </Container>         
        
         </div>
         <div className={styles.sidebarbio}>

         <StaticImage
         placeholder="blurred"
         src="../images/artists/irukanji.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '0px'}}
         />  <br/>

           <Link to="https://soundcloud.com/irukanji25" >
              <img className={styles.artistpiclink} src={soundcloudlong} alt="Sound Cloud Irukanji"/> 
            </Link>
            <Link to="https://open.spotify.com/artist/76HMCkLOJJcJ39QH0Grv8I" >
              <img className={styles.artistpiclink} src={spotifylong} alt="Spotify Irukanji"/> 
            </Link> 
            <Link to="https://www.instagram.com/irukanji25/" >
              <img className={styles.artistpiclink} src={instagramlong} alt="Instagram Irukanji"/> 
            </Link> 
            <Link to="https://www.facebook.com/irukanji.psy" >
              <img className={styles.artistpiclink} src={facebooklong} alt="Facebook Irukanji"/> 
            </Link> 
            
          
          <p className={styles.descriptionTxt}>
          Behind Irukanji standing Ihor Orlovskyi - musician, dj and owner of Sentimony Records
            <br/><br/>
          </p>
                   </div> 
              </div> 
 

    <div className={styles.textCenter}>
    <Link to="/artists/">Go back</Link>
    </div>

   
  </Layout>
)

export const Head = () => <Seo title="Irukanji Bio" />

export default irukanji_bioPage



 
  
