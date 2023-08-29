import React from 'react';
import './Styles/AboutMe.css';
import mifoto from './assets/mifoto.png';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub } from 'react-icons/fa'; // Importa los iconos de React
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const AboutMe = () => {
  const technologies = [
    { name: 'React', icon: <FaReact /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Github', icon: <FaGithub />}
  ]; // Ejemplo de tecnologías aprendidas con sus iconos

  return (
    <Box className='aboutMe__container'>

      <div className='doble__container'>
        <div className='aboutMe__description'>
          <Typography variant='h2' component={'h2'} >About Me</Typography>
          <Typography variant='h5' m={5}>My name is <span className='highlighted'>Marco</span> and I am a passionate developer...</Typography>
        </div>
        <div className='aboutMe__technologies'>
          <Typography variant='h4' mb={5}>Technologies I've Learned</Typography>
          <div className='technologies__grid'>
            {technologies.map((tech, index) => (
              <div className='technology' key={index}>
                <div className='technology__icon'>{tech.icon}</div>
                <div className='technology__name'>{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='aboutMe__image'>
        <img src={mifoto} alt='imagen' />
      </div>
      
    </Box>
  );
};

export default AboutMe;
