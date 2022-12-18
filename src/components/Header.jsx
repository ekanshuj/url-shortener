import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Header = () => {
  return (
    <div className='bg-black text-[#ffff] my-1 flex justify-between'>
      <div className='flex justify-center items-center'>
        <p className='text-lg font-bold mx-2'>URL Shortener</p>
      </div>
      <SocialIcon
        url='https://github.com/ekanshuj/react-ai-image-generator/blob/main/client/src/components/Navbar.jsx'
        network='github'
        fgColor='gray'
        bgColor='black' />
    </div>
  )
}

export default Header