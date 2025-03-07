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

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {isLoading && <Loader />}

    
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
