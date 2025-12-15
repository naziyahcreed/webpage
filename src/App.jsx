import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/Home";

function App() {
  const [theme, setTheme] = useState('theme-default');

  useEffect(() => {
    // Remove all theme classes first
    document.body.classList.remove('theme-default', 'theme-light', 'theme-black');
    // Add the current theme class
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <BrowserRouter>
        <Routes>
          {/* Home scroll page */}
          <Route path="/" element={<HomePage />} />


        </Routes>


        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
