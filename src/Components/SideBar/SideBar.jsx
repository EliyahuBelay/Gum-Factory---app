import '../SideBar/SideBar.css';
import { Link } from 'react-router-dom';


const SideBar = () => {
    return (
        <div className='navbar_container'>
            <ul className='navbar'>
                <li className='navbarItem'><Link to={"/"}>Home</Link></li>
                <li className='navbarItem'><Link to={"/Products"}>Products</Link></li>
                <li className='navbarItem'><Link to={"/Orders"}>Orders</Link></li>
                <li className='navbarItem'><Link to={"/MakeContect"}>MakeContect</Link></li>
                <li className='navbarItem'><Link to={"/MakeOrder"}>MakeOrder</Link></li>
            </ul>
        </div>
    )
}
export default SideBar;