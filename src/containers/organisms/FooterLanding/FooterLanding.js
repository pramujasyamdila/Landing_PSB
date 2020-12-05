import React from 'react';
import './FooterLanding.css';
import { Button } from '../../../components/atoms/btn/btn';
import { Link } from 'react-router-dom';
import {
  FaLaughWink,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const FooterLanding = () => {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Dapatkan Informasi terupdate tentang kami
        </p>
        <p className='footer-subscription-text'>
          Kami tidak akan spam ke email anda
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Kirim</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Tentang Kami</h2>
            <Link to='/'>lorem</Link>
            <Link to='/'>lorem</Link>
            <Link to='/'>lorem</Link>
            <Link to='/'>lorem</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Kontak Kami</h2>
            <Link to='/'>Kontak</Link>
            <Link to='/'>Alamat</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
          </div>
          
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <FaLaughWink className='navbar-icon' />
              PSB - Online
            </Link>
          </div>
          <small className='website-rights'>Kintekindo © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FooterLanding
