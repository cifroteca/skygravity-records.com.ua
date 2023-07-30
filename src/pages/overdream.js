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

const overdream_bio_Page = () => (
  <Layout>
       
     <p className={styles.nameRelease}>Overdream</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>   
        <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Overdream1" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1507220950&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>                                   
        <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Overdream2" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/699489748&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Overdream3" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1528868818&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
             
          </Container>         
        
         </div>
         <div className={styles.sidebarbio}>

         <StaticImage
         placeholder="blurred"
         src="../images/artists/overdream.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '0px'}}
         />  <br/>

           <Link to="https://soundcloud.com/overdream" >
              <img className={styles.artistpiclink} src={soundcloudlong} alt="Sound Cloud Overdream"/> 
            </Link>
            <Link to="https://open.spotify.com/artist/1eAvhoG2yKzjF5KCVRLGdu" >
              <img className={styles.artistpiclink} src={spotifylong} alt="Spotify Overdream"/> 
            </Link> 
            <Link to="https://www.instagram.com/overdream.psy/" >
              <img className={styles.artistpiclink} src={instagramlong} alt="Instagram Overdream"/> 
            </Link> 
            <Link to="https://www.facebook.com/overdreammusic" >
              <img className={styles.artistpiclink} src={facebooklong} alt="Facebook Overdream"/> 
            </Link> 
            
          
          <p className={styles.descriptionTxt}>
          Overdream - Ukrainian psytrance project from Odessa, Kyiv but now based in Berlin started by Maksim Kurushyn<br/>
            Although the project is only three years old, its members have been involved in music and near-musical 
            activities for more than a decade.
            The musical tastes of the guys are not limited to psytrance, they also love dub, ambient 
            and jazz and spend almost all their free time in their home studio working on the project. 
             So far, Overdream has been released on labels such as Avatar Music,  
            Helicon Sound System, Skygravity Records, 
            The debut album 'Wonderwise' will be released at the end of 2008.

            <br/><br/>
          </p>
                   </div> 
              </div> 
 

    <div className={styles.textCenter}>
    <Link to="/artists/">Go back</Link>
    </div>

   
  </Layout>
)

export const Head = () => <Seo title="Overdream Bio" />

export default overdream_bio_Page



 
  
