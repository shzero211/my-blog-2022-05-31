import { Link,useStaticQuery,graphql} from "gatsby";
import React from "react";
import {container,heading,navLinks,navLinkItem,navLinkText,siteTitle} from "./layout.module.css"

function Layout({children,pageTitle}){
  const data=useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          title
        }
      }
    }
    `);
 
    return (
        <main>
        <div className={container}>
            <title>{pageTitle}|{data.site.siteMetadata.title}</title>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
          <nav>
            <ul className={navLinks}>
                <li className={navLinkItem}>
                    <Link className={navLinkText} to="/" >HOME</Link>
                </li>
                <li className={navLinkItem}>
                <Link className={navLinkText} to="/about" >ABOUT</Link>
                </li>
                <li className={navLinkItem}>
                <Link className={navLinkText} to="/blog" >BLOG</Link>
                </li>
            </ul>
          </nav>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
          
          <div>Copyright All Rights</div>
          </div>
        </main>
      );
};
export default Layout