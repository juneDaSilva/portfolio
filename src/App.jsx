import './App.scss';
import React from 'react';
import { Particle } from './components/Particle';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/home/Home';
import Info from './pages/info/Info';
import Projects from './pages/projects/Projects';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const location = useLocation();

  const toggleDark = (mode) => {
    setDarkMode(mode);
  };

  return (
    <div className={darkMode ? 'page' : 'page light'}>
      <div className='wrap'>
        <div className='particle-container'>
          <Particle darkMode={darkMode} />
        </div>
        <header>
          <h1 className='name'>June DaSilva</h1>
          <p className='title'>Fullstack Developer</p>
          <Navigation />
        </header>
        <section className='pages'>
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Home />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/info' element={<Info darkMode={darkMode} />} />
              <Route path='/contact' element={<Home />} />
            </Routes>
          </AnimatePresence>
        </section>
      </div>
      <section>
        <div className='modes-container'>
          <div className='modes' onClick={() => toggleDark(false)}>
            <div
              className={
                darkMode ? 'mode-box light dark-active' : 'mode-box light'
              }
            ></div>
            <p>light</p>
          </div>
          <div className='modes' onClick={() => toggleDark(true)}>
            <div
              className={
                darkMode ? 'mode-box dark dark-active' : 'mode-box dark'
              }
            ></div>
            <p>dark</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
