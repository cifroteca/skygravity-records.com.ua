import * as React from "react"
//import { Link, graphql } from "gatsby"
//import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { Container } from "react-bootstrap";

const IndexPage = () => {

  const samplePageLinks = [ 
    
    {
      text: "HOME",
      url: "home",
      badge: false,
      description: "A simple example of about page",
    },
   {
    text: "RELEASES",
    url: "releases",
    badge: false,
    description: "A simple example of about page",
  },
    {
    text: "ARTISTS",
    url: "artists",
    badge: false,
    description:  "A simple example of linking to another page within a Gatsby site",
  },
  {
    text: "ABOUT",
    url: "about",
    badge: false,
    description: "A simple example of about page",
  },
  {
    text: "MERCH",
    url: "merch",
    badge: false,
    description: "A simple example of about page",
  },
  {
    text: "STREAMING",
    url: "streaming",
    badge: false,
    description: "A simple example of about page",
  }
 
]
    
return (
  <Layout>
    <div className={styles.textCenter}>
        <p className={styles.intro}>
       {" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        
        </p>

    </div>
       
    
  </Layout>
)}

export const Head = () => <Seo title="Home"/>

export default IndexPage




