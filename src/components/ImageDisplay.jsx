import React, { useState, useEffect } from "react";
import imageUrls from "../data/randamImage"
import "../index.css"; // Ensure your CSS file is imported

const ImageDisplay = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [animationClass, setAnimationClass] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("fade-out"); // Start fade-out animation
      setTimeout(() => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % imageUrls.length); // Update image index
        setAnimationClass("slide-in"); // Add slide-in animation
      }, 1000); // Wait for fade-out animation to complete
    }, 5000); // Change image every 20 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="image-container">
      <img
        src={imageUrls[currentImage]}
        alt={`Image ${currentImage + 1}`}
        className={animationClass}
      />
    </div>
  );
};

export default ImageDisplay;
