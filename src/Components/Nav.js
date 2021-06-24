import { Link } from "react-router-dom"

import logo from "../assets/logo_broken.png"


const Home = function() {
    return (
        <div className="nav-box">
            <Link to="/">
                <img className="nav-logo" src={logo} alt="broken gear logo"/>
            </Link>
            <div className="nav-links">
                <Link to="/about">About</Link>
                <a  className="nav-link"
                        href="mailto:TylerJacobsonSE@gmail.com"
                        target="_blank"
                        rel="noreferrer">
                            Contact
                </a>
            </div>
        </div>
    )
}

export default Home