/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Tilt } from 'react-tilt';

import { motion } from "framer-motion";

import { styles } from '../styles';
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
     <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>

    </Tilt>
  )
}


const About = () => {
  return (
    <>
    <motion.div>
    <div className='w-full h-full flex justify-center items-center'>
      <p className={styles.sectionSubText}>
        Introduction</p></div>
        <div className='w-full h-full flex justify-center items-center'>
      <h2 className={styles.sectionHeadText}>
        Overview.</h2></div>
    </motion.div>
    <div className='w-full h-full flex justify-center items-center'>
    <motion.p
     variants={fadeIn("","",0.1,1)}
     className='mt-4 text-secondary text-[17px]
     max-w-3xl leading-[30px]'>
       I'm a capable software developer with know-how in TypeScript and JavaScript.
        I'm good at using tools like React, Node.js, and Three.js. 
        I learn fast and work closely with clients to make practical, scalable, and user-friendly solutions that solve real-life issues. 
        Let's team up to turn your ideas into reality!


    </motion.p>
    </div>

     <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service ,index) => (
        <ServiceCard key={service.title} index={index}
        {...service} />
      ) )}
    </div> 
    </>
  )
}

export default SectionWrapper(About, "about");