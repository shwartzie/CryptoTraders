import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom'

import { useSelector } from 'react-redux'

export const AppHeader = () => {
  const { loggedInUser } = useSelector(state => state.userModule)
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
      {loggedInUser && <li>
        <NavLink to={`/profile/${loggedInUser._id}`}>Profile</NavLink>
      </li>}
      {/* <li>
            <Link to="/about">About Us</Link>
            </li>
            <li>
            <Link to="/contact">Contact Us</Link>
            </li> */}
    </ul>
  )
}