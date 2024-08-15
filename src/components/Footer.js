import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href> <FontAwesomeIcon icon={faFacebook} size="2x" color="#ECA6B6" /></a>
        <a href="#twitter"><FontAwesomeIcon icon={faXTwitter} size="2x" color="#ECA6B6" /></a>
        <a href="#instagram"><FontAwesomeIcon icon={faInstagramSquare} size="2x" color="#ECA6B6" /></a>
        <a href="#linkedin"><FontAwesomeIcon icon={faLinkedin} size="2x" color="#ECA6B6" /></a>
      </div>
    </footer>
  );
};

export default Footer;
