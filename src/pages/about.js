import * as React from "react"
import { Link } from "gatsby"
import * as styles from "../components/index.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const aboutPage = () => (
  <Layout>
        <div className={styles.textCenter}>
    <h1 className={styles.nameRelease}>Skygravity Records</h1>
    <p className={styles.aboutTxt}>Skygravity Records independent record label specializing in psychedelic trance music. <br/>
    The name of the label comes from the name of the Skygravity festival <br/>
    which took place in 2005 in the Crimea and united <br/>
    all Ukrainian psytrance promo groups. <br/><br/>
    The first Skygravity compilation was the first compilation of Ukrainian musicians <br/>
    in a psychedelic trance scene and was founded in 2006<br/><br/>
The label was created to support musicians and producers from all over the world,<br/>
search wonderful rhythms and mystical sounds and collecting <br/>
high-quality psytrance dance music.<br/>
<br/>
Contact: skygravityrec@gmail.com
<br/><br/>
</p>    
    </div>

    <div className={styles.textCenter}>
    <Link to="/">Go back</Link>
    </div>


  </Layout>
)

export const Head = () => <Seo title="About page" />

export default aboutPage
