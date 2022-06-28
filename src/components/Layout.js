import { Link } from "gatsby";
import React from "react";
import {container,heading,navLinks,navLinkItem,navLinkText} from "./layout.module.css"

function Layout({children,pageTitle}){
    return (
        <main>
        <div className={container}>
            <title>{pageTitle}</title>
          <nav>
            <ul className={navLinks}>
                <li className={navLinkItem}>
                    <Link className={navLinkText} to="/" >HOME</Link>
                </li>
                <li>
                <Link className={navLinkText} to="/about" >ABOUT</Link>
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