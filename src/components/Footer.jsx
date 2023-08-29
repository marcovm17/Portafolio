import React from 'react';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Styles/Footer.css';
import { TextField, Typography } from '@mui/material';

export default function Footer() {
  return (
    <section id="contact" className="footer">
      <Typography variant='h2' >Contact</Typography>
      <hr />
      <form className='form' action="https://formspree.io/f/xnqkdynp" method="POST">
        <label><Typography variant='subtitle1'></Typography><TextField fullWidth id="outlined-basic" label="Your email.." variant="outlined" margin='none'/></label>
        <label><Typography variant='subtitle1'></Typography><TextField fullWidth id="outlined-multiline-flexible" label="Your message.." variant="outlined" name="message" multiline rows={5} margin='dense'></TextField></label>
        <div className='contact__button'>
          <Button variant='contained' startIcon={<SendIcon />} type="submit">Send</Button>
          </div>
      </form>
      <nav className='social__media' id="social-media">
        <Button href="https://www.linkedin.com/in/marco-vazquez-mata-533529129/" 
          startIcon={<LinkedInIcon />}>
        </Button>
        <Button href="https://github.com/marcovm17" 
          startIcon={<GitHubIcon />}>
        </Button>
      </nav>
      <footer className='rights'>
        <Typography variant='subtitle1'>Developed and designed by Marco Mata. ©2023. All rights reserved.</Typography>
      </footer>
    </section>
  );
}
