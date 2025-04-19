import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Contact from "./form";
import About from "./About";
import Header from "./header";
import Skills from "./Skills";
import "./Css/App.css";
import { themeContext } from "./Context/theme";
import { ToastContext } from "./Context/ToastContext";
import './Css/toast.css';
import Toast from "./toast.jsx"

function App() {
  const [mode, setMode] = useState("light");

  const [toast, setToast] = useState({
    message: "",
    type: "",
    isVisible: false,
  });

  const showToast = (message, type = "success") => {
    setToast({ message, type, isVisible: true });

    setTimeout(() => {
      setToast(prevToast => ({ ...prevToast, isVisible: false }));
    }, 5000);
    
  };

  return (
    <themeContext.Provider value={{ mode, setMode }}>
      <ToastContext.Provider value={{toast , showToast}}>
        <div className={`app-container ${mode}`}>
          <Header />
          <Toast />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/form" element={<Contact />} />
          </Routes>
        </div>
      </ToastContext.Provider>
    </themeContext.Provider>
  );
}

export default App;
