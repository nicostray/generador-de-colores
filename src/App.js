import { BrowserRouter as  Router,  Route, Routes } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import ToastContainerMio from './components/ToastContainerMio';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import RutasAnimadas from './routes/RutasAnimadas';
import './styles/app.css'


function App() {
  return (
      <div className='app__container'>
        <Router>
          <Navbar />
            <RutasAnimadas />
          <Footer />
        </Router>
        <ToastContainerMio />
      </div>
  )
}

export default App;
