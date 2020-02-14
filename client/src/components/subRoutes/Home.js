import React from "react";
import { Link} from "react-router-dom";

const Home = (props) => {

    return <>
        <h1>Home component</h1>
        <Link to="/test">Link to test component</Link>
    </>
}

export default Home;