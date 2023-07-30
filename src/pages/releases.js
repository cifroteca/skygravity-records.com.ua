import * as React from "react"
import { Link } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const ReleasesPage = () => (
  <Layout>
    <div className={styles.textCenter} >
    <h1 className={styles.nameRelease}>RELEASES</h1>
    
    <div>
    <Link to="/peace_love_ukraine_respect/">     
       <StaticImage
         placeholder="blurred"
         src="../images/plur.jpg"
         width={300}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="Plur"
         style={{margin: '15px'}}
         /> 
         </Link>

    <Link to="/cifroteca/">     
       <StaticImage
         placeholder="blurred"
         src="../images/cifroteca.jpg"
         width={300}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="Cifroteca"
         style={{margin: '15px'}}
         /> 
         </Link>

    <Link to="/igor_lse_nyons_having_fun/">     
       <StaticImage
         placeholder="blurred"
         src="../images/nyonshavingfun.jpg"
         width={300}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="Igor LSE"
         style={{margin: '15px'}}
         /> 
         </Link>

    <Link to="/encoded_traces/">     
       <StaticImage
         placeholder="blurred"
         src="../images/encodedtraces.jpg"
         width={300}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="Encoded Traces"
         style={{margin: '15px'}}
         /> 
         </Link>

    <Link to="/dezzert_immaterial_wishes/">     
       <StaticImage
         placeholder="blurred"
         src="../images/dezzert.jpg"
         width={300}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="Dezzert"
         style={{margin: '15px'}}
         /> 
         </Link>

    <Link to="/semiconductorcity/">     
       <StaticImage
         placeholder="blurred"
         src="../images/semiconductorcity.jpg"
         width={300}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="Semiconductor city"
         style={{margin: '15px'}}
         /> 
         </Link>

    <Link to="/psychotronic/">     
       <StaticImage
         placeholder="blurred"
         src="../images/psychotronic.jpg"
         width={300}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '15px'}}
         /> 
         </Link>

      <Link to="/mystagogue/">     
       <StaticImage
         placeholder="blurred"
         src="../images/mystagogue.jpg"
         width={300}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '15px'}}
         /> 
         </Link>

        <Link to="/urbanforest/">      
         <StaticImage
         placeholder="blurred"
         src="../images/urbanforest.jpg"
         width={300}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '15px'}}
         /> 
          </Link>

        <Link to="/mfkzt/"> 
        <StaticImage
         placeholder="blurred"
         src="../images/mfkzt.jpg"
         width={300}
         quality={80}
         formats={["AUTO","WEBP","AVIF"]}
         alt="A gatsby strinaut"
         style={{margin: '15px'}}
         /> 
         </Link>

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
        <Link to="/">Go back</Link>

    </div>
  </Layout>
)

export const Head = () => <Seo title="Releases Page" />

export default ReleasesPage
