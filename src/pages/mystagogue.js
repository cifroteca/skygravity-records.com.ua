import * as React from "react"
import { Link } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { Container } from "react-bootstrap";



const MystagoguePage = () => (
  <Layout>           
           <p className={styles.nameRelease} >MYSTAGOGUE</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
        <Container>      
          <iframe className={styles.framebandcamp} title="Bancamp music Skygravity records Mystagogue" src="https://bandcamp.com/EmbeddedPlayer/album=898885307/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="https://skygravityrecords.bandcamp.com/album/mystagogue">Mystagogue by Skygravity records</a></iframe>
        </Container>
                        
         {/*  style="border: 0; width: 400px; height: 472px;" */}
         </div>
         <div className={styles.sidebar}>

         <StaticImage
         placeholder="blurred"
         src="../images/mystagogue.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '0px'}}
         />  <br/>
          <p className={styles.descriptionTxt}>
          Have you ever wondered where the sacred knowledge comes from? 
          Who possesses this knowledge and how is the knowledge being 
          passed on through centuries, generation after generation? 
          Skygravity Records present 'MYSTAGOGUE': a journey of the 
          fundamental initiation into the abundant knowledge 
          in the form of music. Become a part of the process 
          of transferring the spirit and technology 
          with the gurus Ocelot, Wizack Twizack, Iaunaria, 
          Sanathana, Overdream and others. 
          Join us on the journey of the sacred enlightenment.
</p>
<br/><br/>
Compiled by Overdream<br/>
Mastered by Cifroteca<br/>
Cover by Swaroop Guhathakurta  <br/>
Release date: January 10, 2011
          </div> 
     </div> 
 

<div className={styles.textCenter}>
<Link to="/releases/">Go back</Link>
</div>

  

   
  </Layout>
)

export const Head = () => <Seo title="Skygravity" />

export default MystagoguePage



 
  
