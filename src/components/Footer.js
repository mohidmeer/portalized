import React from 'react';
import Logo from './logo';
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-primary-300 mt-24 p-8'>
      <div className='max-w-8xl mx-auto'>
        <div className='grid gap-12 md:grid-cols-3'>
       
          <div className='flex flex-col gap-4'>
            <Logo />
            <p className='c6 text-primary-100'>
              Haven't coloring humblebrag sus big. Taiyaki farm-to-table bushwick synth crucifix humblebrag. Health twee vinegar bushwick gochujang semiotics tbh. Semiotics hammock gluten-free listicle salvia godard goth vape.
            </p>
            <form className='relative'>
              <input
                type='email'
                className='w-full bg-transparent border rounded-full p-4'
                placeholder='Enter your Email Here'
              />
              <button className='absolute right-0 top-[3px]'>
                <IoArrowForwardCircleSharp size={52} />
              </button>
            </form>
          </div>

     
          <div className='flex flex-wrap gap-12 justify-center md:gap-20'>
            <div className='flex flex-col gap-5'>
              <p className='h8'>Links</p>
              <Link className='text-primary-100' to='/'>Home</Link>
              <Link className='text-primary-100' to='/about-us'>About Us</Link>
              <Link className='text-primary-100' to='/watch'>Watch</Link>
              <Link className='text-primary-100' to='/mobile-app'>Download</Link>
              <Link className='text-primary-100' to='/listen'>Listen</Link>
              <Link className='text-primary-100' to='/shop'>Shop</Link>
              <Link className='text-primary-100' to='/contact-us'>Contact Us</Link>
            </div>
            <div className='flex flex-col gap-5'>
              <p className='h8'>Account</p>
              <Link className='text-primary-100' to='/sign-up'>Register</Link>
              <Link className='text-primary-100' to='/login'>Login</Link>
              <Link className='text-primary-100' to='/mobile-app'>Download App</Link>
            </div>
          </div>


          <div className='flex flex-col gap-10'>
            <h6 className='h7'>Download Portalized Mobile App</h6>
            <div className='flex flex-col gap-4'>
              <a href='https://apps.apple.com' target='_blank' rel='noopener noreferrer'>
                <img src='/assets/apple-store.png' alt='Download on the Apple App Store' />
              </a>
              <a href='https://play.google.com/store' target='_blank' rel='noopener noreferrer'>
                <img src='/assets/google-store.png' alt='Get it on Google Play' />
              </a>
            </div>
            <div className='flex gap-6 items-center text-3xl'>
              <a
                href='https://www.youtube.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='YouTube'
              >
                <FaYoutube />
              </a>
              <a
                href='https://www.facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'
              >
                <FaFacebook />
              </a>
              <a
                href='https://www.twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Twitter'
              >
                <FaTwitter />
              </a>
              <a
                href='https://www.instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
              >
                <FaInstagram />
              </a>
              <a
                href='https://www.linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
