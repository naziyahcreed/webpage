import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useState, useEffect, Suspense } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/Home";

// Lazy load heavy routes
const AgrotechPage = React.lazy(() => import('./Pages/Agrotech'));

function App() {
  const [theme, setTheme] = useState('theme-black');

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
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white bg-[#041C18]">Loading...</div>}>
          <Routes>
            {/* Home scroll page */}
            <Route path="/" element={<HomePage />} />
            <Route path="/agrotech" element={<AgrotechPage />} />
          </Routes>
        </Suspense>

        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
