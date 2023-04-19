import './nav.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='nav'>
            <ul className='navItems'>
                <Link to="/">Project 1</Link>
                <Link to="/project2">Project 2</Link>
                <Link to="/project3">Project 3</Link>
                <Link to="/project4">Project 4</Link>
                
            </ul>
        </nav>
    )
}

export default NavBar;