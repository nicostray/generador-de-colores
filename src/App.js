import { BrowserRouter as  Router,  Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import './styles/app.css'

function App() {
  return (
    <div className='app__container'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
