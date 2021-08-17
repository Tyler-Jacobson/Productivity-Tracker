import { Link } from "react-router-dom"

import logo from "../assets/logo_broken.png"


const Home = function(props) {
    return (
        <div className={props.timerRunning ? "nav-box nav-box-color-swap" : "nav-box"}>
            <Link to="/" className="nav-logo-container">
                <img className="nav-logo" src={logo} alt="broken gear logo"/>
            </Link>
            <div className="nav-links">
                <a className="nav-link"
                        href="mailto:TylerJacobsonSE@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        >
                            Contact
                </a>
            </div>
        </div>
    )
}

export default Home