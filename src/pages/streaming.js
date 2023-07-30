import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { StaticImage} from "gatsby-plugin-image"

const StreamingPage = () => (
  <Layout>
    <p className={styles.nameRelease}>STREAMING</p> 
    <div>   
    <div className={styles.textCenter}>
        
        <Link to="https://music.apple.com/ru/album/peace-love-ukraine-respect/1688151977">
        <StaticImage
         placeholder="blurred"
         src="../images/logo/applemusic.png"
         width={100}                                
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{marginLeft : '0px'}}
         /> 
         </Link>

         <Link to="https://open.spotify.com/user/m5e4yk1u6zkvcrip37dsk2d7z?si=6e60f49faf104a2c">
        <StaticImage
         placeholder="blurred"
         src="../images/logo/spotifymusic.png"
         width={100}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{marginLeft: '20px'}}
         /> 
         </Link>

         <Link to="https://music.youtube.com/channel/UCpP5aCmw-zt5GzqOD0IPTEg">
        <StaticImage
         placeholder="blurred"
         src="../images/logo/youtubemusic.png"
         width={100}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{marginLeft: '20px'}}
         /> 
         </Link>

         <Link to="https://www.deezer.com/en/profile/5403071844">
        <StaticImage
         placeholder="blurred"
         src="../images/logo/deezer.png"
         width={100}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{marginLeft: '20px'}}
         /> 
         </Link>

         
         <Link to="https://soundcloud.com/skygravityrecords">
        <StaticImage
         placeholder="blurred"
         src="../images/soundcloud.png"
         width={100}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{marginLeft: '20px'}}
         /> 
         </Link>

         <Link to="https://www.mixcloud.com/Cifroteca/">
        <StaticImage
         placeholder="blurred"
         src="../images/logo/mixcloud.png"
         width={100}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{marginLeft: '20px'}}
         /> 
         </Link>       
       </div>
       <br/>
       <br/>

    <p className={styles.nameRelease}>DOWNLOAD</p> 

    <div className={styles.textCenter}>
        
        <Link to="https://www.beatport.com/label/skygravity-records/113183">
        <StaticImage
         placeholder="blurred"
         src="../images/logo/beatport.png"
         width={100}                                
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{marginLeft : '0px'}}
         /> 
         </Link>

         <Link to="https://skygravityrecords.bandcamp.com/">
        <StaticImage
         placeholder="blurred"
         src="../images/bandcamp.jpg"
         width={100}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{marginLeft: '20px'}}
         /> 
         </Link>

         <Link to="https://www.junodownload.com/labels/Skygravity/">
        <StaticImage
         placeholder="blurred"
         src="../images/logo/junodownload.png"
         width={100}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="Juno Download Skygravity"
         style={{marginLeft: '20px'}}
         /> 
         </Link>          
                      
       </div>
       <br/>
       <br/>
     
    <div className={styles.textCenter}>
      <br/>
      <Link to="/">Go back</Link>
    </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default StreamingPage
