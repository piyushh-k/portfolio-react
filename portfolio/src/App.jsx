import { Route, Routes } from 'react-router-dom';
import { useState } from "react";
import Home from './Home';
import Contact from './form';
import About from './About';
import Header from './header';
import Skills from './Skills';
import './Css/App.css';
import { themeContext } from './theme';

function App() {
  const [mode, setMode] = useState('light');

  return (
    <themeContext.Provider value={{ mode, setMode }}>
      <div className={`app-container ${mode}`}> 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/form" element={<Contact />}/>
        </Routes>
      </div>
    </themeContext.Provider>
  );
}

export default App;
