import {Link, NavLink} from 'react-router-dom'

const Navbar = () =>{
    return(
        <nav>
        <ul className='nav'>
        <li><Link to='/Home' className='nav-link'>Home</Link></li>
        <li><NavLink to='/About' className='nav-link'>About</NavLink></li>
        <li><NavLink to='/' className='nav-link'>Landing</NavLink></li>
        <li></li>

        </ul>
        </nav>
    )
}

export default Navbar