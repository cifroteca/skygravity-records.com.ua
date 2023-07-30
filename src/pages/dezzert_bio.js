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



const dezzert_bioPage = () => (
  <Layout>
       
     <p className={styles.nameRelease}>Dezzert</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>                                      
            <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Dezzert - Immaterial wishes"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/953432998&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
             <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Dezzert - Created for You"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1535146171&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                         
             
          </Container>         
        
         </div>
         <div className={styles.sidebarbio}>

         <StaticImage
         placeholder="blurred"
         src="../images/artists/dezzert_live.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '0px'}}
         />  <br/>

           <Link to="https://soundcloud.com/dezzertmusic" >
              <img className={styles.artistpiclink} src={soundcloudlong} alt="Sound Cloud Dezzert"/> 
            </Link>
            <Link to="https://open.spotify.com/artist/5rVZ8GM34y1BW0c32mhyq2" >
              <img className={styles.artistpiclink} src={spotifylong} alt="Spotify Dezzert"/> 
            </Link> 
            <Link to="https://www.instagram.com/dezzert_squarelabmusic/" >
              <img className={styles.artistpiclink} src={instagramlong} alt="Instagram Dezzert"/> 
            </Link> 
            <Link to="https://www.facebook.com/LucianoDezzert" >
              <img className={styles.artistpiclink} src={facebooklong} alt="Facebook Dezzert"/> 
            </Link> 
            
          
          <p className={styles.descriptionTxt}>
          Еhe Dezzert was created by Luciano Rolón. The project always combines in its music a large number of effects 
          and powerful bass lines.<br/>

          Buenos Aires, Argentina      
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

export default dezzert_bioPage



 
  
