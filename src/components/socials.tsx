import Image from 'next/image';

export default function Socials() {
  return (
    <div className='flex justify-items-end bg-primary p-4 sm:p-2 w-full dark:bg-primary '>
      <a href='https://www.linkedin.com/in/eubankscaroline/' target='_blank' rel='noopener noreferrer'>
        <Image src='/linkedin.png' width={30} height={30} alt='LinkedIn Logo' className='mx-auto sm:m-2'/>
      </a>
      <a href='https://github.com/carolineshowscode' target='_blank' rel='noopener noreferrer'>
        <Image src='/githublogo.png' width={50} height={50} alt='LinkedIn Logo' className='mx-auto sm:m-2'/>
      </a>
    </div>
    );
};