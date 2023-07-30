import * as React from "react"
import { Link } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const isotopPage = () => (
  <Layout>
       
     <p className={styles.nameRelease}>Isotop</p>      
         
    <div className={styles.main}>
     <div className={styles.main_content}>
                       
          
        
         </div>
         <div className={styles.sidebarbio}>

         <StaticImage
         placeholder="blurred"
         src="../images/artists/isotop.jpg"
         width={500}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '0px'}}
         />  <br/>

                         
          <p className={styles.descriptionTxt}>
          Vitaliy Shumacher DJ Isotop, 
          member of the Semi-Conductors organizing team 
          and one of the members of Skygravity records. <br/>
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

export const Head = () => <Seo title="Isotop" />

export default isotopPage



 
  
