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

const saikozaurus_bio_Page = () => (
  <Layout>
       
     <p className={styles.nameRelease}>Saikozaurus</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>   
        <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Saikozaurus1" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1507220914&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        <iframe className={styles.framesoundcloud} title="Sound Cloud music Skygravity records Saikozaurus2" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1080023215&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>     
          </Container>         
        
         </div>
         <div className={styles.sidebarbio}>

         <StaticImage
         placeholder="blurred"
         src="../images/artists/saikozaurus.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '0px'}}
         />  <br/>

           <Link to="https://soundcloud.com/saikozaurus" >
              <img className={styles.artistpiclink} src={soundcloudlong} alt="Sound Cloud Saikozaurus"/> 
            </Link>
            <Link to="https://open.spotify.com/artist/2JNszJ0dV4eMrT7y3Y7Xb7" >
              <img className={styles.artistpiclink} src={spotifylong} alt="Spotify Saikozaurus"/> 
            </Link> 
            <Link to="https://www.instagram.com/saikozaurus/" >
              <img className={styles.artistpiclink} src={instagramlong} alt="Instagram Saikozaurus"/> 
            </Link> 
            <Link to="https://www.facebook.com/saikozaurus.music" >
              <img className={styles.artistpiclink} src={facebooklong} alt="Facebook Saikozaurus"/> 
            </Link> 
            
          
          <p className={styles.descriptionTxt}>
            Saikozaurus is a projet started by Daniil Lebedintsev.
          Born in Odesa, Ukraine in 1980, Daniil is the musical mastermind behind the Saikozaurus project. 
          He first discovered his love for psytrance music in 1998 and began his career as a DJ in 2001. 
          In 2003 the Saikozaurus project was born.<br/>
          Saikozaurus made his debut on the psytrance scene in 2007, with his first release on the V/A Neverending Story 
          by Zaikadelic Records. Since then, he has released tracks on various labels such as Vantara Vichitra, Insomnia, 
          Mighty Quinn, Moon Koradji, Treetrolla, Zaikadelic, Skygravity, Ohmnium and more. In 2012, Saikozaurus released 
          his first solo EP titled "Demiurgent Agent" on Moon Station Records.<br/>

          In 2020, Saikozaurus became an exclusive artist of Vantara Vichitra Records. The following year, 
          he released a new EP called "Positive Reinforcement." Additionally, you can find his tracks under the name Tursiopsis.
          Saikozaurus' music is a unique blend of chaos and order, dark and light, and space. 
          His sound takes listeners on a mystical journey into the depths of their subconscious, 
          offering a glimpse into the holistic dimension of pure Absolute consciousness and ancient human archetypes. 
          His music also channels positive energy from friendly beings across the Universe, 
          making it a truly transcendent experience.<br/>

          ॐ May all beings be happy and free!
            
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

export default saikozaurus_bio_Page



 
  
