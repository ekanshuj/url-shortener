import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Header = () => {
  return (
    <header className='flex justify-between items-center flex-wrap px-1 py-1 bg-black text-white'>
      <p className='text-xl sm:text-2xl font-semibold tracking-wider'>URL Shortener</p>
      <SocialIcon
        url='https://github.com/ekanshuj/react-ai-image-generator/blob/main/client/src/components/Navbar.jsx'
        network='github'
        fgColor='gray'
        bgColor='black' />
    </header>
  )
}

export default Header