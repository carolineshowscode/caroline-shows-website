import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='border-0 bg-primary'>
      <ul className='flex p-4'>
        <li className='bg-darkBlue p-2 skew-x-12 shadow-2xl shadow-darkBlue border hover:scale-110'>
          <Link href="/">Home</Link>
        </li>
        <li className='bg-mediumBlue p-2 skew-x-12 shadow-2xl border-y hover:scale-110'>
          <Link href="/about">About</Link>
        </li>
        <li className='bg-lightBlue p-2 skew-x-12 shadow-2xl border hover:scale-110'>
          <a href='mailto:caroline.e.shows@gmail.com'>Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}