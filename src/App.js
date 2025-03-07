// src/App.js
import React, { useState, useEffect } from "react";
import NavbarComponent from "./components/navbar";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Loader from "./components/loadSpinner/loader";
import "./assets/scss/style.scss";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process (like fetching data, etc.)
    const timer = setTimeout(() => {
      setIsLoading(false); // After 2 seconds, set loading to false
    }, 2000); // Hide loader after 2 seconds

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div>
      {isLoading && <Loader />} {/* Show loader if loading is true */}

      {/* The rest of the components will show only after loading is false */}
      {!isLoading && (
        <>
          <NavbarComponent />
          <div className="container mt-3">
            <Menu />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
