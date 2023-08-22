import { Outlet } from 'react-router-dom'
import Sidebar from '../SideBar/index'
import './index.scss'


const Layout = ({language, changeLanguageEN, changeLanguageES}) => {


  
    return (
<div className='app'>
   <Sidebar language={language} changeLanguageEN={changeLanguageEN} changeLanguageES={changeLanguageES} />
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

export default Layout;