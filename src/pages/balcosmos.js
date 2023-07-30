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



const balcosmos_bioPage = () => (
  <Layout>
       
     <p className={styles.nameRelease}>Balcosmos</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>    
        <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Balcosmos - Kim on" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1507221043&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>                                  
        <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Balcosmos - Zagoan " src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/947131102&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
             
          </Container>         
        
         </div>
         <div className={styles.sidebarbio}>

         <StaticImage
         placeholder="blurred"
         src="../images/artists/balcosmos.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '0px'}}
         />  <br/>

           <Link to="https://soundcloud.com/balcosmos" >
              <img className={styles.artistpiclink} src={soundcloudlong} alt="Sound Cloud Balcosmos"/> 
            </Link>
            <Link to="https://open.spotify.com/artist/5wiOTsRu9iNdLAaQL2Oea3" >
              <img className={styles.artistpiclink} src={spotifylong} alt="Spotify Balcosmos"/> 
            </Link> 
            <Link to="https://www.instagram.com/balcosmos/" >
              <img className={styles.artistpiclink} src={instagramlong} alt="Instagram Balcosmos"/> 
            </Link> 
            <Link to="https://www.facebook.com/Balcosmos" >
              <img className={styles.artistpiclink} src={facebooklong} alt="Facebook Balcosmos"/> 
            </Link> 
            
          
          <p className={styles.descriptionTxt}>
          “BALCOSMOS” can be read as “Balance of Cosmos” – is new Alexey Romanov’s solo project.
            Influenced and Goa Trance in 90x Alexey played DJ sets on multiple parties in Ukraine. 
            Later Alexey started making his own music. After changing few artist names, 
            released his first album as Babruix on Sound Kitchen records. Played multiple live sets in Ukraine, Russia and Sweden.

            In 2020 created BALCOSMOS project as combination of psychedelic stories from 
            different sub- genres – Goa, Forest, Fullon and Progressive!
            <br/><br/>
          </p>
                   </div> 
              </div> 
 

    <div className={styles.textCenter}>
    <Link to="/artists/">Go back</Link>
    </div>

   
  </Layout>
)

export const Head = () => <Seo title="Balcosmos Bio" />

export default balcosmos_bioPage



 
  
