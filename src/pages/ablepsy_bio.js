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



const ablepsyPage = () => (
  <Layout>
       
     <p className={styles.nameRelease}>ABLEPSY</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>                                      
              <iframe  className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Ablepsy music" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1507220887&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"></iframe> 
                                             
             <iframe  className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Ablepsy" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1080023161&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </Container>         
        
         </div>
         <div className={styles.sidebarbio}>

         <StaticImage
         placeholder="blurred"
         src="../images/artists/ablepsy.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '0px'}}
         />  <br/>

           <Link to="https://soundcloud.com/ablepsy" >
              <img className={styles.artistpiclink} src={soundcloudlong} alt="Sound Cloud Ablepsy"/> 
            </Link>
            <Link to="https://open.spotify.com/artist/1PvsuWRfYvEZgdEL4iERo2" >
              <img className={styles.artistpiclink} src={spotifylong} alt="Spotify Ablepsy"/> 
            </Link> 
            <Link to="https://www.instagram.com/ablepsy.adm/" >
              <img className={styles.artistpiclink} src={instagramlong} alt="Instagram Ablepsy"/> 
            </Link> 
            <Link to="https://www.facebook.com/ablepsy.adm" >
              <img className={styles.artistpiclink} src={facebooklong} alt="Facebook Ablepsy"/> 
            </Link> 
            
          
          <p className={styles.descriptionTxt}>
          ค๒ɭєקรץ - is a solo music project of under underground forest psychedelic 
          trance from Ukrainian lands. 
          Located in a sunny city Odessa, on the Black sea where he was born and living now.<br/>
            His interest in sound psychoacoustics starts from 2008 year and still same flow 
            unfall can name like he falling deeper into the void exploring the universe laws 
            with experimenting on present futures of pasts endless vibrations. <br/>

            Always keeping searching for the flow of unknown before frequency sound.
            Ablepsy music is sharing vibe to the audience exciting soundscapes and usually 
            unusual music adventures. <br/>
            Thru own resonance experience by traveling in 
            sound dimension straight outta from his psyence lab.

            There are times when those eyes inside your brain stare back at you. 
            And then you found your place in that harmonies structure of chaos         <br/>
            Odessa, Ukraine
            <br/><br/>
          </p>
                   </div> 
              </div> 
 

    <div className={styles.textCenter}>
    <Link to="/artists/">Go back</Link>
    </div>

   
  </Layout>
)

export const Head = () => <Seo title="Ablepsy bio" />

export default ablepsyPage



 
  
