import './styles/App.scss'
import HomePagePreview from './pages/HomePage/HomePage'
import { DisplayContactDetails } from './pages/ContactDetailsPage/ContactDetails'
import { ContactList } from './cmps/ContactList/ContactList'
import { StatisticPage } from './pages/Statistics/StatisticPage'
import { ContactEdit } from './pages/ContactEditPage/ContactEdit'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { TransferForm } from './cmps/TransferForm'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom'

function App() {



  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Routes>
          <Route exact path='/' element={< HomePagePreview />}></Route>
          <Route exact path='/contact/edit/:id' element={< ContactEdit />}></Route>
          <Route exact path='/contact/edit/' element={< ContactEdit />}></Route>
          <Route exact path='/contacts/' element={< ContactList />}></Route>
          <Route exact path='/contact/:id' element={< DisplayContactDetails />}></Route>
          <Route exact path='/statistics/' element={< StatisticPage />}></Route>
          <Route exact path='/contacts/send-currency/:id' element={< TransferForm />}></Route>
        </Routes>
        <AppFooter />
      </div>
    </Router>
  )
}

export default App
