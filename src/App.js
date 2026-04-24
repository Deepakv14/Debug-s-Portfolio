import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Timeline from './components/Timeline/Timeline.jsx'
import Resume from './components/Resume.jsx'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Timeline/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/resume' element={<Resume/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
