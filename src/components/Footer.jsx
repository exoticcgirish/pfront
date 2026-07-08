import React from "react";
import { Linkedin, Github } from "lucide-react";

const Footer = () => (
  <footer className='py-10 mt-20 text-center bg-white border-t border-gray-200'>
    <div className='flex justify-center mb-4 space-x-6'>
      <a
        href='https://www.linkedin.com/in/girishyadav1/'
        target='_blank'
        rel='noopener noreferrer'
        className='text-gray-500 hover:text-blue-600'
      >
        <Linkedin className='w-6 h-6' />
      </a>
      <a
        href='https://github.com/exoticcgirish'
        target='_blank'
        rel='noopener noreferrer'
        className='text-gray-500 hover:text-blue-600'
      >
        <Github className='w-6 h-6' />
      </a>
    </div>
    <p className='text-sm text-gray-500'>
      © {new Date().getFullYear()} Girish Yadav. All rights reserved.
    </p>
  </footer>
);

export default Footer;
