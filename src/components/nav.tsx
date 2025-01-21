import Link from 'next/link';

const Nav: React.FC = () => {
  return (
    <nav className='border-0 bg-primary font-dosis dark:text-black sm:text-xl'>
      <ul className='flex p-4 sm:p-8'>
        <li className='bg-darkBlue p-2 skew-x-12 shadow-2xl border-4 shadow-blackSolid hover:scale-110 text-center'>
          <Link href="/">Home</Link>
        </li>
        <li className='bg-mediumBlue p-2 skew-x-12 shadow-2xl shadow-blackSolid border-y-4 hover:scale-110 text-center'>
          <Link href="/about">About</Link>
        </li>
        <li className='bg-lightBlue p-2 skew-x-12 shadow-2xl shadow-blackSolid border-4 hover:scale-110 text-center'>
          <a href='mailto:caroline.e.shows@gmail.com'>Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;