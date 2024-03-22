// src/components/Hobbies.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hobbies.css';

function Hobbies() {
  useEffect(() => {
    // Creating a new Audio object and pointing to the correct path
    const audio = new Audio('/audio/sam.mp4');

    // Playing the audio and catching any errors related to autoplay restrictions
    audio.play().catch(error => console.error('Audio playback failed:', error));

    // Cleanup function to pause audio when the component unmounts or re-renders
    return () => audio.pause();
  }, []);
  const hobbies = [
    { id: 1, title: 'Golfing', description: 'Mark loves to play golf.', image: 'https://source.unsplash.com/random/200x200?golfing' },
    { id: 1, title: 'Writing emails', description: 'Mark spends hours at a time constructing the perfect email.', image: 'https://source.unsplash.com/random/200x200?computer' },
    { id: 2, title: 'Photography', description: 'Capturing moments through the lens, Mark has a keen eye for photography.', image: 'https://source.unsplash.com/random/200x200?photography' },
    { id: 3, title: 'Gardening', description: 'With a green thumb, Mark enjoys gardening and nurturing plants.', image: 'https://source.unsplash.com/random/200x200?gardening' },
    // Add more hobbies as needed
  ];

  return (
    <div className="hobbies">
      {hobbies.map((hobby) => (
        <motion.div key={hobby.id} className="hobby" whileHover={{ scale: 1.05 }}>
          <img src={hobby.image} alt={hobby.title} />
          <h3>{hobby.title}</h3>
          <p>{hobby.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default Hobbies;
