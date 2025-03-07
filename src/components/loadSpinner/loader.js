import React, { useEffect, useState } from "react";
import loader from "../../assets/img/om-removebg-preview.png";

function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`d-flex justify-content-center align-items-center loader-main ${
        !isVisible ? "fade-out" : "fade-in"
      }`}
      style={{ height: "100vh" }}
    >
      <div className="text-center">
        <img
          src={loader}
          alt="Loading..."
          style={{ width: "110px", marginTop: "20px" }}
        />
      </div>
    </div>
  );
}

export default Loader;
