import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Quotes.css';

function Quotes() {
  

    useEffect(() => {
      // Creating a new Audio object and pointing to the correct path
      const audio = new Audio('/audio/stephen.mp3');
  
      // Playing the audio and catching any errors related to autoplay restrictions
      audio.play().catch(error => console.error('Audio playback failed:', error));
  
      // Cleanup function to pause audio when the component unmounts or re-renders
      return () => audio.pause();
    }, []);
  const quotes = [
    { text: "Have you dweebs done the Hilton form?", author: "Mark" },
    { text: "Morons done form yet?", author: "Mark" },
    { text: "Have you muppets done the Hilton form yet?", author: "Mark" },
    { text: "A true friend and a brilliant mind.", author: "John" },
    // Add more quotes as needed
  ];

  return (
    <div className="quotes">
      {quotes.map((quote, index) => (
        <motion.div
          key={index}
          className="quote-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p>"{quote.text}"</p>
          <cite>- {quote.author}</cite>
        </motion.div>
      ))}
    </div>
  );
}

export default Quotes;
