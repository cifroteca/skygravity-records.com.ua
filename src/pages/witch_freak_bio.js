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



const witch_freak_bioPage = () => (
  <Layout>
       
     <p className={styles.nameRelease}>Witch Freak</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>                                      
             
             <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Witch Freak" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1080023173&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
             <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Witch Freak" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1323502417&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </Container>         
        
         </div>
         <div className={styles.sidebarbio}>

         <StaticImage
         placeholder="blurred"
         src="../images/artists/witchfreak.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '0px'}}
         />  <br/>

           <Link to="https://soundcloud.com/witch-freak" >
              <img className={styles.artistpiclink} src={soundcloudlong} alt="Sound Cloud Witch Freak"/> 
            </Link>
            <Link to="https://open.spotify.com/artist/0oRKSP6F9XPeYJyAsdTC90" >
              <img className={styles.artistpiclink} src={spotifylong} alt="Spotify Witch Freak"/> 
            </Link> 
            <Link to="https://www.instagram.com/witch_freak_alexander/" >
              <img className={styles.artistpiclink} src={instagramlong} alt="Instagram Witch Freak"/> 
            </Link> 
            <Link to="https://www.facebook.com/witchfreak3019192832" >
              <img className={styles.artistpiclink} src={facebooklong} alt="Facebook Witch Freak"/> 
            </Link> 
            
          
          <p className={styles.descriptionTxt}>
          Witch Freak is a project started by Alexander Tacconi from United Kingdom<br/>
          Living for the nature and loving the psychedelic culture
          OrganiK Circus Records Founder and Music Producer
            <br/><br/>
          </p>
                   </div> 
              </div> 
 

    <div className={styles.textCenter}>
    <Link to="/artists/">Go back</Link>
    </div>

   
  </Layout>
)

export const Head = () => <Seo title="Witch Freak Bio" />

export default witch_freak_bioPage



 
  
