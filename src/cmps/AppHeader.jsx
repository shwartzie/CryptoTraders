import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
  } from 'react-router-dom'

export const AppHeader = () => {
    return (
        <ul className='app-header-nav-bar'>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/contacts">Contacts</NavLink>
            </li>
            <li>
            <NavLink to='/statistics/'>Statistics</NavLink>
            </li>
            {/* <li>
            <Link to="/about">About Us</Link>
            </li>
            <li>
            <Link to="/contact">Contact Us</Link>
            </li> */}
      </ul>
    )
}