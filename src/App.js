import './styles/App.scss'
import HomePagePreview from './pages/HomePage/HomePage'
import { DisplayContactDetails } from './pages/ContactDetailsPage/ContactDetails'
import { ContactList } from './cmps/ContactList/ContactList'
import { StatisticPage } from './pages/Statistics/StatisticPage'
import { ContactEdit } from './pages/ContactEditPage/ContactEdit'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'



function App() {
  return (
    <Router >
      <div className="App">
        <div className='layout'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to='/statistics/'>Statistics</Link>
            </li>
            {/* <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li> */}
          </ul>
          <Routes>
            <Route exact path='/' element={< HomePagePreview />}></Route>
            <Route exact path='/contact/edit/:id' element={< ContactEdit />}></Route>
            <Route exact path='/contact/edit/' element={< ContactEdit />}></Route>
            <Route exact path='/contacts' element={< ContactList />}></Route>
            <Route exact path='/contact/:id' element={< DisplayContactDetails />}></Route>
            <Route exact path='/statistics/' element={< StatisticPage />}></Route>

          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
