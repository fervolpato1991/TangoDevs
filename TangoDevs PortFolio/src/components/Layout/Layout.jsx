import './Layout.scss';
<<<<<<< Updated upstream
import SideBar from '../SideBar/SideBar';

const Layout = () => {
    return (
        <SideBar/>
    )
}
=======
import Sidebar from '../SideBar';

const Layout = () => {
    return (
<div className='app'>
   <Sidebar/>
   <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
        
        )}

>>>>>>> Stashed changes

export default Layout;