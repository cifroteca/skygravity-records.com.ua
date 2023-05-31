import * as React from "react"
import { Link } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const ReleasesPage = () => (
  <Layout>
    <div className={styles.textCenter} >
    <h1>Releases</h1>
    
    <div>
 
       <StaticImage
         placeholder="blurred"
         src="../images/skygravity.jpg"
         width={300}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '15px'}}
         /> 
             
      <StaticImage
         placeholder="blurred"
         src="../images/skygravity.jpg"
         width={300}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '15px'}}
         /> 

        <StaticImage
         placeholder="blurred"
         src="../images/skygravity.jpg"
         width={300}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '15px'}}
         /> 

        <Link to="/solarsystem/"> 
        <StaticImage
         placeholder="blurred"
         src="../images/solarsystem.jpg"
         width={300}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '15px'}}
         /> 
         </Link>
          
         <Link to="/1skygravity/">

        <StaticImage
         placeholder="blurred"
         src="../images/skygravity.jpg"
         width={300}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '15px'}}
         /> 
         </Link>

    </div>
         <br/><br/>
        <Link to="/">Go back to the homepage</Link>

    </div>
  </Layout>
)

export const Head = () => <Seo title="Releases Page" />

export default ReleasesPage
