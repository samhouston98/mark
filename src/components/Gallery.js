import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

function Gallery() {
  
  useEffect(() => {
    // Creating a new Audio object and pointing to the correct path
    const audio = new Audio('/audio/matt.mp3');

    // Playing the audio and catching any errors related to autoplay restrictions
    audio.play().catch(error => console.error('Audio playback failed:', error));

    // Cleanup function to pause audio when the component unmounts or re-renders
    return () => audio.pause();
  }, []);

  const [selectedImg, setSelectedImg] = useState(null);
  const images = [
    '/images/mark.webp',
    '/images/mark2.webp',
    '/images/mark3.webp',
    '/images/mark4.webp',
    '/images/mark5.webp',
    '/images/mark6.webp',
    '/images/mark7.webp',
   
    // Add more images as needed
  ];

  return (
    <div className="gallery">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          onClick={() => setSelectedImg(img)}
          whileHover={{ opacity: 0.8 }}
          transition={{ duration: 0.3 }}
        />
      ))}
      {selectedImg && (
        <motion.div
          className="backdrop"
          onClick={() => setSelectedImg(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.img
            src={selectedImg}
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
          />
        </motion.div>
      )}
    </div>
  );
}

export default Gallery;
