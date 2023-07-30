import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { StaticImage} from "gatsby-plugin-image"

const ArtistsPage = () => (
  <Layout>
    <h1 className={styles.nameRelease}>DJ's</h1>
    
    <div className={styles.main2} >
   
        <div>
        <Link to="/alienoxx/">
        <StaticImage
          placeholder="blurred"
          src="../images/artists/alienoxx.jpg"
          width={330}
          height={255}
          quality={80}
          formats={["AUTO","WEBP","AVIF"]}
          alt="A gatsby strinaut"
          style={{margin: '15px'}}
          />      
        </Link>
        <div className={styles.nameArtist}>Alienoxx</div>
        </div>

        <div>
        <Link to="../cifroteca_bio/">
        <StaticImage
          placeholder="blurred"
          src="../images/artists/jet.jpg"
          width={330}
          height={255}
          quality={80}
          formats={["AUTO","WEBP","AVIF"]}
          alt="A gatsby strinaut"
          style={{margin: '15px'}}
          />      
        </Link>
        <div className={styles.nameArtist}>Jet</div>
        </div>

        <div>
        <Link to="/sneak/">
        <StaticImage
          placeholder="blurred"
          src="../images/artists/sneak.jpg"
          width={330}
          height={255}
          quality={80}
          formats={["AUTO","WEBP","AVIF"]}
          alt="A gatsby strinaut"
          style={{margin: '15px'}}
          />      
        </Link>
        <div className={styles.nameArtist}>Sneak</div>
        </div>

        <div>
        <Link to="/isotop/">
        <StaticImage
          placeholder="blurred"
          src="../images/artists/isotop.jpg"
          width={330}
          height={255}
          quality={80}
          formats={["AUTO","WEBP","AVIF"]}
          alt="A gatsby strinaut"
          style={{margin: '15px'}}
          />      
        </Link>
        <div className={styles.nameArtist}>Isotop</div>
        </div>
        
        </div>

        <br/><br/>

   
    <h1 className={styles.nameRelease}>ARTISTS</h1>
    
    <div className={styles.main1} >

    <div>
    <Link to="/ablepsy_bio/">
    <StaticImage
      placeholder="blurred"
      src="../images/artists/ablepsy.jpg"
      width={330}
      height={255}
      quality={80}
      formats={["AUTO","WEBP","AVIF"]}
      alt="A gatsby strinaut"
      style={{margin: '15px'}}
      />      
    </Link>
    <div className={styles.nameArtist}>Ablepsy</div>
    </div>

    <div>
    <Link to="/dezzert_bio/">
    <StaticImage
      placeholder="blurred"
      src="../images/artists/dezzert_live.jpg"
      width={330}
      height={255}
      quality={80}
      formats={["AUTO","WEBP","AVIF"]}
      alt="A gatsby strinaut"
      style={{margin: '15px'}}
      />      
    </Link>
    <div className={styles.nameArtist}>Dezzert</div>
    </div>

     <div>
    <Link to="/roof_raiser_bio/">     
       <StaticImage
         placeholder="blurred"
         src="../images/artists/roofraiser.jpg"
         width={330}
         height={255}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '15px'}}
         />        
         </Link>
         <div className={styles.nameArtist}>Roof Raiser</div>
         </div>

         <div>
    <Link to="/witch_freak_bio/">     
       <StaticImage
         placeholder="blurred"
         src="../images/artists/witchfreak.jpg"
         width={330}
         height={255}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '15px'}}
         />        
         </Link>
         <div className={styles.nameArtist}>Witch Freak</div>
         </div>
        
         <div>
        <Link to="/cifroteca_bio/">     
        <StaticImage
         placeholder="blurred"
         src="../images/artists/cifroteca.jpg"
         width={330}
         height={255}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '15px'}}
         /> 
         </Link>
         <div className={styles.nameArtist}>Cifroteca</div>
         </div>

         <div>
          <Link to="/igor_lse_bio/">                
          <StaticImage
            placeholder="blurred"
            src="../images/artists/igorlse.jpg"
            width={330}
            height={255}
            quality={80}
            formats={["AUTO","WEBP","AVIF"]}
            alt="A gatsby strinaut"
            style={{margin: '15px'}}
            /> 
          </Link>
          <div className={styles.nameArtist}>Igor LSE</div>
          </div>

          <div>
          <Link to="/overdream/">      
          <StaticImage
          placeholder="blurred"
          src="../images/artists/overdream.jpg"
          width={330}
          height={255}
          quality={80}
          formats={["AUTO","WEBP","AVIF"]}
          alt="A gatsby strinaut"
          style={{margin: '15px'}}
          />           
            </Link>
            <div className={styles.nameArtist}>Overdream</div>
          </div>


        <div>
        <Link to="/saikozaurus/"> 
        <StaticImage
         placeholder="blurred"
         src="../images/artists/saikozaurus.jpg"
         height={255}
         width={330}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '15px'}}
         />          
         </Link>
         <div className={styles.nameArtist}>Saikozaurus</div>
          </div>

         <div>
        <Link to="/balcosmos/"> 
        <StaticImage
         placeholder="blurred"
         src="../images/artists/balcosmos.jpg"
         width={330}
         height={260}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '15px'}}
         />        
         </Link>    
         <div className={styles.nameArtist}>Balcosmos</div>
          </div>     

          <div>
        <Link to="/irukanji/"> 
        <StaticImage
         placeholder="blurred"
         src="../images/artists/irukanji.jpg"
         width={330}
         height={260}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '15px'}}
         />        
         </Link>    
         <div className={styles.nameArtist}>Irukanji</div>
          </div>  

          <div>
        <Link to="/tookytooky/"> 
        <StaticImage
         placeholder="blurred"
         src="../images/artists/tookytooky.jpg"
         width={330}
         height={260}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '15px'}}
         />        
         </Link>    
         <div className={styles.nameArtist}>Tookytooky</div>
          </div>   

          <div>
        <Link to="/swaratrip/"> 
        <StaticImage
         placeholder="blurred"
         src="../images/artists/swaratrip.jpg"
         width={330}
         height={260}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '15px'}}
         />        
         </Link>    
         <div className={styles.nameArtist}>Swaratrip</div>
          </div>  

         </div>
         <br/><br/>

         <div className={styles.textCenter}>
          <Link to="/">Go back</Link>
          </div>

   
   </Layout>
)

export const Head = () => <Seo title="Page two" />

export default ArtistsPage
