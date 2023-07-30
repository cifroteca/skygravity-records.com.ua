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



const swaratrip_bioPage = () => (
  <Layout>
       
     <p className={styles.nameRelease}>Swaratrip</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>                                      
        <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Swaratrip" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1507220932&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Swaratrip" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/947131069&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </Container>         
        
         </div>
         <div className={styles.sidebarbio}>

         <StaticImage
         placeholder="blurred"
         src="../images/artists/swaratrip.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="Swaratrip"
         style={{margin: '0px'}}
         />  <br/>

           <Link to="https://soundcloud.com/swaratrip" >
              <img className={styles.artistpiclink} src={soundcloudlong} alt="Sound Cloud Swaratrip"/> 
            </Link>
            <Link to="https://open.spotify.com/artist/3wGbxywaL7ToMqjUTFgqJj" >
              <img className={styles.artistpiclink} src={spotifylong} alt="Spotify Swaratrip"/> 
            </Link> 
            <Link to="https://www.instagram.com/swaratrip/" >
              <img className={styles.artistpiclink} src={instagramlong} alt="Instagram Swaratrip"/> 
            </Link> 
            <Link to="https://www.facebook.com/swaratrip" >
              <img className={styles.artistpiclink} src={facebooklong} alt="Facebook Swaratrip"/> 
            </Link> 
            
          
          <p className={styles.descriptionTxt}>
          Psytrance and goa trance project founded by Igor Morozov born in Ukraine, Netherlands based. 
          His style was formed due to his love to high-quality music and overriding desire to experiment 
          and share his musical ideas combining mostly goa and psychedelic trance vibration. 
          A lot of inspiration came from legendary Glowing Flame Records and Vertigo records 
          along with such beloved projects as Trold, Braincell as well as Man With No Name, 
          Blue Planet Corporation, Cosmosis and Prana as for goa vibrations. 
          His music has been supported by such labels as Neogoa records, Vertigo records and Timewarp, 
          representing 2 album, 1 EP and a number of collaboration tracks and remixes 
          with such renowned artists as Braincell, Blue Planet Corporation, Artha, Lacerta, 
          Cosmic Dimension, Alienapia and Sky Technology. 
            <br/><br/>
          </p>
                   </div> 
              </div> 
 

    <div className={styles.textCenter}>
    <Link to="/artists/">Go back</Link>
    </div>

   
  </Layout>
)

export const Head = () => <Seo title="Swaratrip Bio" />

export default swaratrip_bioPage



 
  
