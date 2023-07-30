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



const igor_lse_bioPage = () => (
  <Layout>
       
     <p className={styles.nameRelease}>Igor LSE</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>  
              <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Igor LSE1" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1379314537&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>                                    
              <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Igor LSE2"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1315626562&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
             
          </Container>         
        
         </div>
         <div className={styles.sidebarbio}>

         <StaticImage
         placeholder="blurred"
         src="../images/artists/igorlse.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '0px'}}
         />  <br/>

           <Link to="https://soundcloud.com/user-843205618" >
              <img className={styles.artistpiclink} src={soundcloudlong} alt="Sound Cloud Igor LSE"/> 
            </Link>
            <Link to="https://open.spotify.com/artist/6RBdriDvYCX87mZocYLrnc" >
              <img className={styles.artistpiclink} src={spotifylong} alt="Spotify Igor LSE"/> 
            </Link> 
            <Link to="https://www.instagram.com/igorlse/" >
              <img className={styles.artistpiclink} src={instagramlong} alt="Instagram Igor LSE"/> 
            </Link> 
            <Link to="https://www.facebook.com/igor.blanchoz" >
              <img className={styles.artistpiclink} src={facebooklong} alt="Facebook Igor LSE"/> 
            </Link> 
            
          
          <p className={styles.descriptionTxt}>
          Igor Lse is a project started by Igor Blanchoz
          Igor a talented musician from a very beautiful and small town of Nyon, France.
          
            <br/><br/>
          </p>
                   </div> 
              </div> 
 

    <div className={styles.textCenter}>
    <Link to="/artists/">Go back</Link>
    </div>

   
  </Layout>
)

export const Head = () => <Seo title="Igor LSE Bio" />

export default igor_lse_bioPage



 
  
