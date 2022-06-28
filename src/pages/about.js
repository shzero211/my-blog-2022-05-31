import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"
import Layout from "../components/Layout";
// markup
const AboutSpace = () => {
  return (
      
      <Layout pageTitle="About Me">
        <StaticImage alt="dog" 
        src="../images/dog.jpg"
        />
      </Layout>
  ); 
};

export default AboutSpace
