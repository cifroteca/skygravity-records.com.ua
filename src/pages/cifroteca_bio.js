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



const cifroteca_bioPage = () => (
  <Layout>
       
     <p className={styles.nameRelease}>Cifroteca - Dj Jet</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>                                      
             <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Cifroteca - Ipso" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1507220944&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
             <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Cifroteca - Virtual Module" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1237430017&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
             <iframe width="100%" height="120" title="Sound Cloud music Skygravity records Cifroteca - Mix from Koleidoskopie" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FCifroteca%2Fdj-jet-skygravity-recods-parvati-quest-part-2%2F" frameborder="0" ></iframe>                                             
             
          </Container>         
        
         </div>
         <div className={styles.sidebarbio}>

         <StaticImage
         placeholder="blurred"
         src="../images/artists/cifroteca.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '0px'}}
         />  <br/>

           <Link to="https://soundcloud.com/cifroteca" >
              <img className={styles.artistpiclink} src={soundcloudlong} alt="Sound Cloud Cifroteca"/> 
            </Link>
            <Link to="https://open.spotify.com/artist/4HZ20GVwqPF7fm3W8IbykT" >
              <img className={styles.artistpiclink} src={spotifylong} alt="Spotify Cifroteca"/> 
            </Link> 
            <Link to="https://www.instagram.com/cifroteca.psy/" >
              <img className={styles.artistpiclink} src={instagramlong} alt="Instagram Cifroteca"/> 
            </Link> 
            <Link to="https://www.facebook.com/cifroteca.music" >
              <img className={styles.artistpiclink} src={facebooklong} alt="Facebook Cifroteca"/> 
            </Link> 
            
          
          <p className={styles.descriptionTxt}>
          The Cifroteca is a project by Iofik Yuriy created in 2006. 
          Yura experimented a lot with music and the selection of equipment and music programs, 
          in the collection of Yura there is 1 album together with Alexei Roof Raiser «Wild Storm» 2013, 
          as well as an album of a digital library that was released in 2022, 
          Yura is also from the team of organizers of the Skygravity Festival and 
          the creator and ideological inspirer of the Skygravity Records label     <br/> 
          Kyiv, Ukraine  
            <br/><br/>
          </p>
                   </div> 
              </div> 
 

    <div className={styles.textCenter}>
    <Link to="/artists/">Go back</Link>
    </div>

   
  </Layout>
)

export const Head = () => <Seo title="Cifroteca Bio" />

export default cifroteca_bioPage



 
  
