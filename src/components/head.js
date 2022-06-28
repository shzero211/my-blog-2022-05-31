import {Link} from "gatsby"
import * as React from "react"
function Head(){
    return(
        <header style={{display: "flex",gap: 20}}>
        <Link to="/">인덱스</Link>
        <Link to="/about">어바웃</Link>
        <Link to="/test">테스트</Link>
        <Link to="/test-space">테스트 스페이스</Link>
      </header>
    );
};
export default Head
