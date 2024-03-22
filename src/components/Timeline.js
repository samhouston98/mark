import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';

function Timeline() {
  useEffect(() => {
    // Creating a new Audio object and pointing to the correct path
    const audio = new Audio('/audio/cammy.mp3');

    // Playing the audio and catching any errors related to autoplay restrictions
    audio.play().catch(error => console.error('Audio playback failed:', error));

    // Cleanup function to pause audio when the component unmounts or re-renders
    return () => audio.pause();
  }, []);

  // Sample events data for the timeline
  const events = [
    { year: '1930', event: 'Mark was born in Scotland.' },
    { year: '1950', event: 'Finished High School.' },
    { year: '1970', event: 'Became a renowned gimp.' },
    { year: '1990', event: 'Retired and took up golfing.' },
    { year: '2022', event: 'Went to his first Celtic game.' },
  ];

  // Rendering the timeline with events
  return (
    <div className="timeline">
      {events.map((item, index) => (
        <motion.div
          key={index}
          initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 }}
          className="timeline-item"
        >
          <h3>{item.year}</h3>
          <p>{item.event}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default Timeline;
