import './SideBar.scss';
import { Link } from 'react-router-dom';
 
const SideBar = () => {
    return (
        <div className='NavBar'>
            <Link to='/' className='logo'>
                <img src="" alt="TangoDevsLogo"/>
            </Link>

        </div>
    )
}

export default SideBar;