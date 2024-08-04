"use client"

import React from 'react';
import { motion } from 'framer-motion';

const aboutMe = {
  title: "About Me",
  description: "Hi, I'm Edwin Rivera, a Jr Full Stack Engineer passionate about creating seamless digital experiences. With a proficiency in multiple programming languages and technologies, I am looking to grow in the industry.",
  info: [
    { fieldName: "Name", fieldValue: "Edwin Rivera" },
    { fieldName: "Phone", fieldValue: "(813)-454-4235" },
    { fieldName: "Experience", fieldValue: "6+ Months" },
    { fieldName: "Nationality", fieldValue: "Puerto Rican" },
    { fieldName: "Email", fieldValue: "edwinrivera016@outlook.com" },
    { fieldName: "Languages", fieldValue: "English, Spanish" },
  ],
};

const AboutMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
      className="py-12 bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">{aboutMe.title}</h1>
        <p className="text-lg text-gray-300 mb-6 text-center max-w-2xl mx-auto">{aboutMe.description}</p>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto">
          {aboutMe.info.map((info, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-semibold mb-2">{info.fieldName}</h2>
              <p className="text-gray-400 break-words">{info.fieldValue}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default AboutMe;
