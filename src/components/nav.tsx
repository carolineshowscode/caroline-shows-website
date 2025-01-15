import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='border-0 bg-primary sm:text-xl'>
      <ul className='flex p-4 sm:p-8'>
        <li className='bg-darkBlue p-2 skew-x-12 shadow-2xl border shadow-blackSolid hover:scale-110 sm:w-1/5 text-center'>
          <Link href="/">Home</Link>
        </li>
        <li className='bg-mediumBlue p-2 skew-x-12 shadow-2xl shadow-blackSolid border-y ml-2 hover:scale-110 sm:w-1/5 text-center'>
          <Link href="/about">About</Link>
        </li>
        <li className='bg-lightBlue p-2 skew-x-12 shadow-2xl shadow-blackSolid border ml-2 hover:scale-110 sm:w-1/5 text-center'>
          <a href='mailto:caroline.e.shows@gmail.com'>Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}