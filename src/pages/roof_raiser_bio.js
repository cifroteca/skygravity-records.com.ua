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



const roof_raiser_bioPage = () => (
  <Layout>
       
     <p className={styles.nameRelease}>Roof Raiser</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>     
        <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Roof Raiser1" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1507220905&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>                                 
        <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Roof Raiser2" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/699489736&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>             
             
          </Container>         
        
         </div>
         <div className={styles.sidebarbio}>

         <StaticImage
         placeholder="blurred"
         src="../images/artists/roofraiser.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '0px'}}
         />  <br/>

           <Link to="https://soundcloud.com/roofraiser" >
              <img className={styles.artistpiclink} src={soundcloudlong} alt="Sound Cloud Roof Raiser"/> 
            </Link>
            <Link to="https://open.spotify.com/artist/0dFqLKIeuK1PZsy9c9kzPA" >
              <img className={styles.artistpiclink} src={spotifylong} alt="Spotify Roof Raiser"/> 
            </Link> 
            <Link to="https://www.instagram.com/roofraiser.adm/" >
              <img className={styles.artistpiclink} src={instagramlong} alt="Instagram Roof Raiser"/> 
            </Link> 
            <Link to="https://www.facebook.com/roofraiser" >
              <img className={styles.artistpiclink} src={facebooklong} alt="Facebook Roof Raiser"/> 
            </Link> 
            
          
          <p className={styles.descriptionTxt}>
          The Roof Raiser project of Alexiy Petrovskiy from Kyiv, Ukraine.
          Roof Raiser music will Raise you deep in 2 odd psychedelic
          forest weird worlds of synthetic mind games which
          controlling balance supremacy.
            <br/><br/>
          </p>
                   </div> 
              </div> 
 

    <div className={styles.textCenter}>
    <Link to="/artists/">Go back</Link>
    </div>

   
  </Layout>
)

export const Head = () => <Seo title="Roof Raiser Bio" />

export default roof_raiser_bioPage



 
  
