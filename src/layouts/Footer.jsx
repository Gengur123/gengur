
import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

import footerBackground from '../images/jwong-footer.jpg'
import twitter from '../images/twitter.svg'
import twitch from '../images/twitch.svg'
import youtube from '../images/youtube.svg'
import instagram from '../images/instagram.svg'

function Footer () {
  const footerBackgroundStyle = {
    backgroundImage: `url(${footerBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '20vh',
  };

  return(
    <div style={footerBackgroundStyle}>
      <Container>
        <Row className='text-center text-light'>
          <Col>Test</Col>
          <Col></Col>
          <Col>
            <h6 className='pt-2'>Follow Me</h6>
            <Row className='justify-content-center pt-4'> 
              <a href="https://twitter.com/JWonggg" target='_blank' className='icon-link'>
                <Image src={twitter} className='icon'/>
              </a>
              <a href="https://www.twitch.tv/jwonggg" target='_blank' className='icon-link'>
                <Image src={twitch} className='icon'/>
              </a>
              <a href="https://www.youtube.com/@jwonggg" target='_blank' className='icon-link'>
                <Image src={youtube} className='icon'/>
              </a>
              <a href="https://www.instagram.com/jwonggg/" target='_blank' className='icon-link'>
                <Image src={instagram} className='icon'/>
              </a>
            </Row>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Footer;