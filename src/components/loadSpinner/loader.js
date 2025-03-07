// src/components/loadSpinner/loader.js
import React, { useEffect, useState } from "react";
import loader from "../../assets/img/om-removebg-preview.png";

function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // After 2 seconds, trigger fade-out animation
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    // Apply fade-out animation when isVisible is false
    <div
      className={`d-flex justify-content-center align-items-center loader-main ${!isVisible ? "fade-out" : "fade-in"}`}
      style={{ height: "100vh" }}
    >
      <div className="text-center">
        {/* <PulseLoader color="#00bfff" loading={true} size={15} /> */}
        <img src={loader} alt="Loading..." style={{ width: "110px", marginTop: "20px" }} />
      </div>
    </div>
  );
}

export default Loader;
