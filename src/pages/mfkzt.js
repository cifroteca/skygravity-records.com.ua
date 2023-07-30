import * as React from "react"
import { Link } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { Container } from "react-bootstrap";



const Monoatomic_substance_Page = () => (
  <Layout>
         
           <p className={styles.nameRelease} >Skygravity Vol.3 - Monoatomic Substance [MFKZT]</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>      
        <iframe  className={styles.framebandcamp} title="Bancamp music Skygravity records MFKZT" src="https://bandcamp.com/EmbeddedPlayer/album=503752651/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="https://skygravityrecords.bandcamp.com/album/skygravity-vol-3-monatomic-substance">Skygravity Vol.3 - Monatomic substance by Skygravity records</a></iframe>
        </Container>
                        
         {/*  style="border: 0; width: 400px; height: 472px;" */}
         </div>
         <div className={styles.sidebar}>

         <StaticImage
         placeholder="blurred"
         src="../images/mfkzt.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '0px'}}
         />  <br/>
          <p className={styles.descriptionTxt}>
          The 3rd volume of Skygravity compilation is dedicated to Skygravity 
          Festival which is held annually on the picturesque Black Sea Cost, 
          Ukraine, Crimea. Every year, in July we arrange “Sky Gravity” festival
           – the most bright, colorful and dynamic musical event of the year, 
           which attracts psymusic-lovers from the whole country and foreign 
           guests as well. Album Info / Track Info: "Mfkzt"(Skygravity Vol.3)
            is the compilation that gathered various artists from 
            Ukraine, Russia, Czech Republic, Morocco and Greece. 
            The release is the first Ukrainian compilation which 
            gathered such an international team. "Mfkzt" 
            (sometimes pronounced "mufkuzt") is the ancient 
            Egyptian name for a transformed state of gold. 
            By a special process of arc heating, gold and 
            other platinum group metals can be turned 
            into a single atom or mono atomic substance 
            - a form of powder - that has super
            -conductive properties. A superconductor 
            does not allow any voltage potential or any 
            magnetic field to exist within itself; it is a perfect insulator. 
            But it is extremely sensitive to magnetic fields of infinitely 
            minute magnitudes and will respond to extremely small magnetic forces. 
            Within such a conductor a single frequency light flows, 
            liquid-like, at the speed of sound. Its null magnetic 
            field repels both North and South magnetic poles, 
            but it can absorb high magnetic energy, producing even more light.
             The Earth's magnetic field can give sufficient energy for it to levitate.
</p>
<br/><br/>
Compiled by Cifroteca<br/>
Mastered by Nahati records<br/>
Cover by Kadaasarva    <br/>
15 December 2007     <br/>

          </div> 
     </div> 
     
<div className={styles.textCenter}>
<Link to="/releases/">Go back</Link>
</div>

  

   
  </Layout>
)

export const Head = () => <Seo title="Skygravity" />

export default Monoatomic_substance_Page



 
  
