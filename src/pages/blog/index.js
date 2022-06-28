import * as React from "react"
import Layout from "../../components/Layout";
import { useStaticQuery,graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
// markup
const BlogPage = () => {
  const data=useStaticQuery(graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          
        }
        id
        body
      }
    }
  }`);
  return (
      
      <Layout pageTitle="My Blog Posts">
        <p>My cool posts will go in here</p>
        <ul>
          {data.allMdx.nodes.map((node)=>(
            <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <h2>{node.frontmatter.date}</h2>
           <MDXRenderer>
            {node.body}
           </MDXRenderer>
           </article>
          ))}
        </ul>
      </Layout>
  ); 
};

export default BlogPage
